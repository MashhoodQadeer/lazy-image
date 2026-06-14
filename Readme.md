# React Lazy Image Utility

A modern, high-performance, and **zero-dependency** React utility for lazy-loading images. By leveraging the browser's native `IntersectionObserver` API, this library ensures that images are only fetched when they are about to enter the viewport, significantly optimizing your application's **First Contentful Paint (FCP)** and reducing initial bandwidth usage.

## Key Features
* **Zero Dependencies:** Keeps your production bundle size extremely small.
* **Performance-First:** Uses the native `IntersectionObserver` API, which performs calculations off the main thread.
* **Layout Shift Prevention:** Built-in support for dimensions to prevent Cumulative Layout Shift (CLS).
* **Flexible Implementation:** Provides both a ready-to-use `LazyImage` component and a headless `useLazyImage` hook for custom UI builds.
* **Modern Effects:** Includes a base CSS layer for smooth, professional fade-in transitions.


## Installation

`npm install @mashhoodqadeer/lazy-image`

### Usage
1.  Ready-to-use Component
The simplest way to implement lazy loading in your components:

```import { LazyImage } from 'react-lazy-image-utility';

const MyComponent = () => (
  <LazyImage alt="A beautiful landscape" height="{600}" placeholder="thumbnail.jpg" src="high-res-photo.jpg" width="{800}"/>
);

```

**2. Headless Hook (Custom UI)**
If you need full control over the DOM structure or want to integrate with custom styling libraries (like Tailwind CSS):

```
import { useLazyImage } from 'react-lazy-image-utility';

const CustomImage = ({ src, alt }) => {
  const [ref, isIntersecting] = useLazyImage({ threshold: 0.2 });

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <img src={src} alt={alt} className="fade-in" />
      ) : (
        <div className="skeleton-loader" />
      )}
    </div>
  );
};

```


