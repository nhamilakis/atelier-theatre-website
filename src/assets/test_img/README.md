# Test images

Throwaway images for testing the show gallery. Generate them by opening
`claude-info/make-test-images.html` in a browser and clicking "Download all",
then move the files here:

```bash
mkdir -p src/assets/test
mv ~/Downloads/test-*.jpg src/assets/test/
```

Then reference them in a show in `src/data/el.ts` (import at the top of the
file, use in the show's `gallery`):

```ts
import test1 from "../assets/test/test-1.jpg";
import test2 from "../assets/test/test-2.jpg";
import test3 from "../assets/test/test-3.jpg";

// …inside a show object:
gallery: [
  { image: test1, alt: "Test 1" },
  { image: test2, alt: "Test 2" },
  { image: test3, alt: "Test 3" },
],
```

You can also use one as a `poster` or import a PDF as a `leaflet` the same way.
Delete this folder when you're done testing.
