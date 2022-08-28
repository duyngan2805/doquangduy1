import React, { useEffect } from "react";

// class Test extends React.Component {
//   constructor(props) {
//     this.state = {};
//   }
//   componentDidMount(): void {
//     console.log("didmount");
//   }
//   componentDidUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<{}>,
//     snapshot?: any
//   ): void {
//     console.log("");
//   }
//   componentWillUnmount(): void {
//     console.log("unmountmount");
//   }

//   render(): React.ReactNode {
//     console.log("return");
//     return <h1>Test Class</h1>;
//   }
// }

type TestProps = {
  title: string;
  show: boolean;
  onClick: () => void;
  onClickWithParam: (input: boolean) => void;
};

const Test: React.FC<TestProps> = (props) => {
  const { title, show, onClick, onClickWithParam } = props;
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return <h1>Test Class</h1>;
};

export default Test;
