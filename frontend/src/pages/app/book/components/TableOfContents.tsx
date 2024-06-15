import styled from "styled-components";
import ListElement from "./ListElement";

const Container = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextHeader = styled.h2`
  font-size: var(--medium-l);
`;

const ListContainer = styled.ol`
  padding: 0;
  width: 100%;
  list-style-type: none;
`;

const List = styled.ol`
  list-style: upper-roman;
  width: 100%;
  list-style-type: none;
  padding-inline-start: 2ch;
  color: var(--whiteWithOpacity);

`;

const ListSection = styled.div`
  & > li > a {
    font-weight: bold;
    margin-block-start: 1em;
    text-decoration: none;
    display: grid;
    grid-template-columns: auto max-content;
    align-items: end;
  }
`;

function TableOfContents() {
  return (
    <Container>
      <InnerContainer>
        <TextHeader> სარჩევი</TextHeader>
        <ListContainer role="list">
          <ListSection>
            <ListElement title="შესავალი" path="Introduction" page={5} />

            <List role="list">
              <ListElement
                title="ორგანული ქიმიის საგანი და ამოცანები"
                path="OrganChemistrySubject"
                page={5}
              />

              <ListElement
                title="ორგანული ქიმიის დებულებები"
                path="OrganChemistryProvisions"
                page={8}
              />
            </List>
          </ListSection>

          <ListSection>
            <ListElement
              title="1. ორგანული ქიმია"
              path="OrganChemistry"
              page={9}
            />

            <List role="list">
              <ListElement
                title="ალკენები (ოლეფინები)"
                path="alcens"
                page={17}
              />
              <ListElement
                title="ეთილენის მოლეკულის განლაგება"
                path="etilen"
                page={21}
              />

              <ListElement
                title="ალკენებთან ელექტროფილური მიერთება"
                path="alcen2"
                page={24}
              />

              <ListElement title="სპირტები" path="alcohol" page={27} />

              <ListElement
                title="არომატული ნახშირწყალბადები"
                path="hydrocarbon"
                page={27}
              />

              <ListElement title="იზომერია" path="isomer" page={27} />
            </List>
          </ListSection>
          <ListSection>
            <ListElement title="2. კეტონები" path="" page={28} />

            <List role="list">
              <ListElement title="კანონმჟავები" path="" page={30} />
              <ListElement
                title="აზოტშემცველი ნაერთები-ამინები"
                path=""
                page={34}
              />

              <ListElement
                title="ამინომჟავები . პეპტიდები . ცილები"
                path=""
                page={35}
              />
              <ListElement title="ნუკლეინის მჟავები" path="" page={42} />
              <ListElement title="ნახშირწყლები" path="" page={43} />
            </List>
          </ListSection>

          <ListSection>
            <ListElement title="ტესტები" path="tests" page={96} />

            <List role="list">
              <ListElement
                title="მხტუნავი ნატრიუმი"
                path="jumpingNatrium"
                page={96}
              />

              <ListElement
                title="დამატებითი ტესტები"
                path="additionalTests"
                page={96}
              />
            </List>
          </ListSection>
        </ListContainer>
      </InnerContainer>
    </Container>
  );
}

export default TableOfContents;
