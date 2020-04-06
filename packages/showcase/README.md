# Showcase

This packages includes the showcase component.

## Installation

Install the module

```bash
npm install @commons-ui/showcase --save
```

## Usage

These components can be accessed by importing from the `showcase` root directory:

```jsx
/**
 * CommonsUI dependencies
 * posts: an array of the posts you want to show in the showcase component
 */
import Showcase from '@showcase-ui/showcase';

export default function Show() {
	return (
        <Showcase stories={posts} />
    );
}
```
