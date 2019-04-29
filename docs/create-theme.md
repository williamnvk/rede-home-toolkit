# withTheme

Example of code:

```
import { createTheme } from "signature-ui"
...
const myTheme = createTheme({
    colors: {
        primary: {
            light: '#273D6A',
            main: '#11264E',
            dark: '#051534',
            content: '#FFFFFF',
        }
        secondary: {
            light: '#FFDC99',
            main: '#DEB463',
            dark: '#BB8F3A',
            content: '#FFFFFF',
        },
        {
            ...
        }
    }
});
```

## colors

`primary`, `secondary`, `success`, `warning`, `error`, `info`, `text`, `gray`, `black`, `background`

### color type

| key       | type     | Description                                                                                     |
| --------- | -------- | ----------------------------------------------------------------------------------------------- |
| `light`   | `string` | _lighter color tone_                                                                            |
| `main`    | `string` | _normal color_                                                                                  |
| `dark`    | `string` | _darker color tone_                                                                             |
| `content` | `string` | _contrast color tone, eg: button background is `color.main` and button text is `color.content`_ |
