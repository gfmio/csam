
import { component as c } from "../../../../lib/component";
import { Form, H1, Input, Option, Select, Textarea } from "../../../../lib/components/html";
import { View } from "../../../../lib/components/view";

//
// Inputs
//

// const InputDefaultWrapper = (props: any, children: any[]) => {
//   return (
//     <View {...props}>
//       { children }
//     </View>
//   );
// };

// const MyTextarea = (props: any, children: any[]) => {
//   return (
//     <Textarea { ...props }>{ props.value }</Textarea>
//   );
// };

// const MySelect = (props: any, children: any[]) => {
//   return (
//     <Textarea { ...props }>{ props.value }</Textarea>
//   );
// };

// const WrappedInput = (props: any, children: any[]) => {
//   const wrappers = {
//     default: InputDefaultWrapper,
//   };

//   const elements = {
//     default: Input,
//     textarea: MyTextarea,
//     select: MySelect,
//   };

//   // let Wrapper;
//   // let Element;

//   // if (props.type in wrappers) {
//   //   Wrapper = wrappers[props.type];
//   // } else {
//   //   Wrapper = wrappers.default;
//   // }
//   // if (props.type in elements) {
//   //   Element = elements[props.type];
//   // } else {
//   //   Element = elements.default;
//   // }
//   const Wrapper: (props: any, children: any[]) => any = (props.type in wrappers) ? wrappers[props.type] : wrappers.default;
//   const Element: (props: any, children: any[]) => any = (props.type in elements) ? elements[props.type] : elements.default;

//   return (
//     <Wrapper { ...props }>
//       <Element type={ props.type } { ...props } />
//     </Wrapper>
//   );
// };

// H1.injectStyle({});

export function Playground(props: any, children: any[]) {
  return (
    <View>
      <H1>Playground</H1>
      <Form>
        <Input type="text" value="abc"/>
        <Textarea>ABC</Textarea>
        <Input type="number" />
        <Input type="date" />
        <Input type="datetime" />
        <Select>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
        </Select>
        <Select multiple>
          <Option>Option 1</Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
        </Select>
      </Form>
    </View>
  );
}
