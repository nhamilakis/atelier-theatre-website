current_dir := justfile_directory()
DEPLOY_KEY := "99H71aha7hn48UPiFYp6KF22A83PCKP62mH1893Gwp93xXg1667T19QAr9AV93f5"

# Rsync exclusions (one per line for easy modification)
RSYNC_EXCLUDES := '''
--exclude=*.log
--exclude=.venv
--exclude=data
--exclude=.mypy_cache
--exclude=notebooks
--exclude=.ruff_cache
--exclude=*.egg-info
--exclude=__pycache__
--exclude=.pytest_cache
--exclude=dist
--exclude=build
--exclude=.git
--exclude=*.index
'''

default:
    @just --list

dev:
    npm run dev

preview:
    rm -rf dist/
    npm run build
    npm run preview

# Internal: rsync helper with exclusions
_rsync-to source_path target_path:
    #!/usr/bin/env bash
    @echo "Syncing source code to remote cluster..."
    EXCLUDES=$(echo "{{ RSYNC_EXCLUDES }}" | tr '\n' ' ')
    if [ -z "${SSHPASS}" ]; then
        rsync -azP --delete ${EXCLUDES} "{{ source_path }}/" "{{ target_path }}/"
    else
        sshpass -e rsync -azP --delete ${EXCLUDES} "{{ source_path }}/" "{{ target_path }}/"
    fi

upload-dev:
    rm -rf dist/
    @echo "building preview..."
    npm run build:preview
    @echo "Deploying to flores ..."
    @just _rsync-to "{{ current_dir }}/dist/" "flores:public/{{ DEPLOY_KEY }}/"
    @echo "✓ Website uploaded successfully!"
