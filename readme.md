
## Dynamic route support

- [x] single dynamic segment `pages/post/[pid]`

	Only works if segment is a valid UUIDv4
- [ ] multiple dynamic segments `pages/post/[...slug]`
- [ ] optional catch all routes `pages/post/[[...slug]]`

Supported options are implemented following the [next.js route resolution](https://nextjs.org/docs/routing/dynamic-routes#caveats)
