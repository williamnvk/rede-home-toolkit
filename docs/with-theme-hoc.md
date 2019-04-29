# withTheme (HOC)

Example of code:

```
import { withTheme, Button } from "signature-ui"
...
const myTheme = createTheme(...); // if you have one
...
const MyButton = (props) => <Button {...props} />
export default React.memo(withTheme(MyButton))
```

### type

`normal`, `primary`, `secondary`, `success`, `error`, `warning`, `info`, `dark`, `light`, `gray`

### sizes

`tiny`, `small`, `normal`, `large`, `extra`

### button props

| key      | type      | default  | Description                                                       |
| -------- | --------- | -------- | ----------------------------------------------------------------- |
| type     | `string`  | `normal` | The button pattern is the same as the background color and border |
| inverted | `boolean` | `false`  | Inverts the button colors according to the defined type           |
| size     | `string`  | `normal` | Change the size of button container                               |
