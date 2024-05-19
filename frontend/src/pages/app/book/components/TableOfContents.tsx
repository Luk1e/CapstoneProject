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
            <ListElement title="Introduction" path=" Introduction" page={5} />

            <List role="list">
              <ListElement
                title="About This Book"
                path="Introduction-About-This-Book"
                page={5}
              />

              <ListElement
                title="Acknowledgments"
                path="Introduction-Acknowledgments"
                page={8}
              />
              <ListElement
                title="About the Author"
                path="Introduction-About-the-Author"
                page={8}
              />

              <ListElement
                title="Disclaimer"
                path="Introduction-Disclaimer"
                page={8}
              />
            </List>
          </ListSection>

          <ListSection>
            <ListElement
              title="1. Promise Basics"
              path="Promise-Basics"
              page={9}
            />

            <List role="list">
              <ListElement
                title="The Promise Lifecycle"
                path="Promise-Basics-The-Promise-Lifecycle"
                page={17}
              />
              <ListElement
                title="Creating New (Unsettled) Promises"
                path="Promise-Basics-Creating-New-Unsettled-Promises"
                page={21}
              />

              <ListElement
                title="Creating Settled Promises"
                path="Promise-Basics-Creating-Settled-Promises"
                page={24}
              />

              <ListElement
                title="Summary"
                path="Promise-Basics-Summary"
                page={27}
              />
            </List>
          </ListSection>
          <ListSection>
            <ListElement
              title="2. Chaining Promises"
              path="Chaining-Promises"
              page={28}
            />

            <List role="list">
              <ListElement
                title="Catching Errors"
                path="Chaining-Promises-Catching-Errors"
                page={30}
              />
              <ListElement
                title="Using finally() in Promise Chains"
                path="Chaining-Promises-Using-finally-in-Promise-Chains"
                page={34}
              />

              <ListElement
                title="Returning Values in Promise Chains"
                path="Chaining-Promises-Returning-Values-in-Promise-Chains"
                page={35}
              />
              <ListElement
                title="Returning Promises in Promise Chains"
                path="Chaining-Promises-Returning-Promises-in-Promise-Chains"
                page={42}
              />
              <ListElement
                title="Summary"
                path="Chaining-Promises-Summary"
                page={43}
              />
            </List>
          </ListSection>
          <ListSection>
            <ListElement
              title="3. Working with Multiple Promises"
              path="Working-with-Multiple-Promises"
              page={43}
            />

            <List role="list">
              <ListElement
                title="The Promise.all() Method"
                path="Working-with-Multiple-Promises-The-Promiseall-Method"
                page={51}
              />

              <ListElement
                title="The Promise.allSettled() Method"
                path="Working-with-Multiple-Promises-The-PromiseallSettled-Method"
                page={57}
              />

              <ListElement
                title="The Promise.any() Method"
                path="Working-with-Multiple-Promises-The-Promiseany-Method"
                page={61}
              />
              <ListElement
                title="The Promise.race() Method"
                path="Working-with-Multiple-Promises-The-Promiserace-Method"
                page={65}
              />

              <ListElement
                title="Summary"
                path="Working-with-Multiple-Promises-Summary"
                page={67}
              />
            </List>
          </ListSection>

          <ListSection>
            <ListElement
              title="4. Async Functions and Await Expressions"
              path="Async-Functions-and-Await-Expressions"
              page={67}
            />

            <List role="list">
              <ListElement
                title="Defining Async Functions"
                path="Async-Functions-and-Await-Expressions-Defining-Async-Functions"
                page={69}
              />

              <ListElement
                title="What Makes Async Functions Different"
                path="Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different"
                page={81}
              />

              <ListElement
                title="Summary"
                path="Async-Functions-and-Await-Expressions-What-Makes-Async-Functions-Different"
                page={83}
              />
            </List>
          </ListSection>
          <ListSection>
            <ListElement
              title="5. Unhandled Rejection Tracking"
              path="Unhandled-Rejection-Tracking"
              page={83}
            />

            <List role="list">
              <ListElement
                title="Detecting Unhandled Rejections"
                path="Unhandled-Rejection-Tracking-Detecting-Unhandled-Rejections"
                page={85}
              />

              <ListElement
                title="Web Browser Unhandled Rejection Tracking"
                path="Unhandled-Rejection-Tracking-Web-Browser-Unhandled-Rejection-Tracking"
                page={90}
              />

              <ListElement
                title="Node.js Unhandled Rejection Tracking"
                path="Unhandled-Rejection-Tracking-Nodejs-Unhandled-Rejection-Tracking"
                page={94}
              />

              <ListElement
                title=" Summary"
                path="Unhandled-Rejection-Tracking-Summary"
                page={95}
              />
            </List>
          </ListSection>
          <ListSection>
            <ListElement
              title="    Final Thoughts"
              path="Final-Thoughts"
              page={96}
            />

            <List role="list">
              <ListElement
                title=" Download the Extras"
                path="Final-Thoughts-Download-the-Extras"
                page={96}
              />

              <ListElement
                title="Support the Author"
                path="Final-Thoughts-Support-the-Author"
                page={96}
              />

              <ListElement
                title="Help and Support"
                path="Final-Thoughts-Help-and-Support"
                page={97}
              />

              <ListElement
                title="Follow the Author"
                path="Final-Thoughts-Follow-the-Author"
                page={102}
              />
            </List>
          </ListSection>
        </ListContainer>
      </InnerContainer>
    </Container>
  );
}

export default TableOfContents;
