import {DBCustomSelect} from "@db-ux/react-core-components";

const App = () => {
  return (
    <main>
        <DBCustomSelect
            options={[{ value: "Option 1" }, { value: "Option 2" }]}
            placeholder="Placeholder"
            label="Label"
            multiple
            onSelect={values => console.log(values)}
        >

        </DBCustomSelect>
    </main>
  );
};

export default App;
