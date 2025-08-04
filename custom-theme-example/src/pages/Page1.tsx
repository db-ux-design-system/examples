import {
  DBButton,
  DBCard,
  DBInfotext,
  DBSection,
  DBStack,
} from "@db-ux/react-core-components";
import { SemanticList } from "@db-ux/react-core-components/dist/shared/model";

const Page1 = () => {
  return (
    <DBSection width="medium" spacing="small">
      <DBCard>
        <h1>db-ux-regular</h1>
        <p>Use this as default for consumer apps</p>
        <DBStack>
          <DBButton icon="plus">Test</DBButton>
          <DBStack direction="row">
            {SemanticList.map((semantic) => (
              <DBInfotext key={semantic} semantic={semantic}>
                {semantic}
              </DBInfotext>
            ))}
          </DBStack>
        </DBStack>
      </DBCard>
    </DBSection>
  );
};

export default Page1;
