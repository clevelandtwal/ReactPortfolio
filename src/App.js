// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,
         Nav,
         NavDropdown,
         Jumbotron,
         Container,
         Form,
         Image,
         Row,
         Col,
         Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Trevor Wallace</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="#web-dev">Web Development Projects</NavDropdown.Item>
            <NavDropdown.Item href="#fin-tech">Fintech BizDev Projects</NavDropdown.Item>
        </NavDropdown>
        </Nav>
      </Navbar>

      <Jumbotron fluid>
        <Container>
          <h1>Trevor Wallace</h1>
          <h2 className="mb-5">Strategic Partnerships | Financial Technology</h2>
          <p>
            Results driven business development professional with 7+ years of
            experience in startup and early growth stage financial technology companies.
          </p>
        </Container>
      </Jumbotron>

      <Container fluid className="mt-5" id="about">
        <h2>About Me</h2>
        <Row>
          <Col xs={2}>
            <Image
              fluid
              width={150}
              height={150}
              alt="Trevor Responsive Image"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGxSPnV7ggksA/profile-displayphoto-shrink_400_400/0/1556327573411?e=1617235200&v=beta&t=T-9vuwwFFBVIcq7zo_QTTkPCItp185LpIg4f57oTOUY"
              roundedCircle
            />
          </Col>
          <Col xs={10}>
            <p className="mr-3 mt-3 mb-3">
              I'm passionate about financial technology and it's ability to impact the
              lives of individuals and
              small
              businesses for good. Throughout my career,
              I've helped fintechs drive top of funnel volume and growth through creative,
              meaningful partnerships
              to reach
              more of these stakeholders.
            </p>

            <p className="mr-3">
              The latest development in this journey is learning how to build and improve
              on web applications to
              promote
              adoption of financial technology by more people in more places.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5" id="web-dev">
        <h2>Web Development Portfolio</h2>
        <Row>
          <Col>
            <p>
              This page may look a bit sparse with projects right now,
              but it's because I am just getting started!
            </p>
            <p>
              I am learning how to do this so I can start a business of my own. I've been working in and around
              technology startups for almost my entire professional career and believe that I can have a bigger
              impact by venturing off on my own.
            </p>
            <p>
              Follow this link to my Github to see my projects: https://github.com/clevelandtwal/
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5" id="fin-tech">
        <h2>Business Development Portfolio</h2>
        <Row>
          <Col>
            <p>
              Over the past 7+ years I've been working in business development with a specific focus on platform
              and distribution partnerships for fintechs across residential mortgage lending, small business
              lending, and wealth management. These roles have given me meaningful experience in leading strategic
              partnerships and integrations, as well as channel sales and partner marketing initiatives as well--
              all with early startup or growth stage fintech companies. I was the 1st employee at Ethos Lending
              (which was later acquired) and one of the first 40 employees at SmartBiz Loans and most recently at
              Human Interest and BlueVine.
            </p>
            <p>
              Each of these roles have required me to be a self-starter, wear multiple hats and most importantly
              create and execute on a GTM strategy, reporting directly into the CEO or VP of Business Development.
              Bottom line, I am comfortable getting my hands dirty in order to get the job done while working with
              leadership to meet organizational objectives.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              fluid
              width={150}
              height={150}
              class="img img-thumbnail"
              src="https://media.bluevine.com/wp-content/uploads/2020/05/20101047/bluevine-logo.png"
              alt="blueVine_logo"
            />
          </Col>
          <Col>
            <Image
              fluid
              width={150}
              height={150}
              class="img img-thumbnail"
              src="https://images.ctfassets.net/tj9jxg7kaxby/5pfZ2fwcihpJt8VrjB8vAj/99f9d1541caed73f63c76d3df4af8a24/logo_hi.jpg"
              alt="human_interest_logo"
            />
          </Col>
          <Col>
            <Image
              fluid
              width={150}
              height={150}
              class="img img-thumbnail"
              src="https://d23w0vtcogqbsm.cloudfront.net/marketing/23_shared_images/logos/logo-simple.svg"
              alt="smartbiz_loans_logo"
            />
          </Col>
          <Col>
            <Image
              fluid
              width={150}
              height={150}
              class="img img-thumbnail"
              src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1400647470/xg56jnmqn0v91gfheajc.png"
              alt="ethos_lending_logo"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5" id="contact">
        <h2>Contact Me</h2>
        <Row>
        <Col xs={2}>
          <Image
            fluid
            width={150}
            height={150}
            alt="Trevor Responsive Image"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGxSPnV7ggksA/profile-displayphoto-shrink_400_400/0/1556327573411?e=1617235200&v=beta&t=T-9vuwwFFBVIcq7zo_QTTkPCItp185LpIg4f57oTOUY"
            roundedCircle
            />
          </Col>
          <Col xs={10}>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control placeholder="First name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control placeholder="Last name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control placeholder="Email" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-5">
        <Row>
          <Col><a class="fa fa-linkedin" href="https://linkedin.com/in/trevorlwallace">LinkedIn</a></Col>
          <Col>© TW 2020</Col>
        </Row>
      </Container>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
