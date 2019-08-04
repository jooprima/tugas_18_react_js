import React, {Component} from "react";
import {
  Row,
  Slider,
  Caption,
  Slide,
  Col,
  Card,
  CardTitle,
  Badge,
  Button,
  Icon,
  SideNavItem,
  SideNav,
  Pagination
} from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <SideNav
            trigger={
              <Button waves="light" style={{width: 100}}>
                <Icon center>list</Icon>
              </Button>
            }
            options={{closeOnClick: true}}
          >
            <SideNavItem
              userView
              user={{
                background: "https://placeimg.com/640/480/tech",
                image: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
                name: "Jooprima",
                email: "jooprima@gmail.com"
              }}
            />
            <SideNavItem href="#!icon" icon="cloud">
              Profil Saya
            </SideNavItem>
            <SideNavItem href="#!icon" icon="cloud">
              Hubungi Kami
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Produk</SideNavItem>
            <SideNavItem waves href="#!third">
              Kesehatan
            </SideNavItem>
            <SideNavItem waves href="#!third">
              Komputer & Aksesoris
            </SideNavItem>
            <SideNavItem waves href="#!third">
              Gaming
            </SideNavItem>
            <SideNavItem waves href="#!third">
              Kamera
            </SideNavItem>
            <SideNavItem waves href="#!third">
              Fashion Pria
            </SideNavItem>
            <SideNavItem waves href="#!third">
              Fashion Wanita
            </SideNavItem>
          </SideNav>
        </Row>

        <Row>
          <Slider>
            <Slide
              image={
                <img
                  src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
                  alt="pantai"
                />
              }
            >
              <Caption>
                <h3>Pantai</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan kesempatan jalan-jalan ke pantai dengan membeli
                  sebuah produk
                </h5>
              </Caption>
            </Slide>

            <Slide
              image={
                <img
                  src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"
                  alt="pantai"
                />
              }
            >
              <Caption>
                <h3>Hongkong</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan kesempatan jalan-jalan ke Hongkong dengan membeli
                  sebuah produk
                </h5>
              </Caption>
            </Slide>

            <Slide
              image={
                <img
                  src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
                  alt="pantai"
                />
              }
            >
              <Caption>
                <h3>Paris</h3>
                <h5 className="light grey-text text-lighten-3">
                  Dapatkan kesempatan jalan-jalan ke Paris dengan membeli sebuah
                  produk
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </Row>

        <Row>
          <h5>Hot List</h5>
          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                  Audio
                </CardTitle>
              }
            >
              <span>
                Audio Technica - mulai dari
                <Badge className="red" style={{color: "white"}}>
                  Rp910rb
                </Badge>
              </span>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                  Handphone
                </CardTitle>
              }
            >
              <span>
                Handphone - mulai dari
                <Badge className="red" style={{color: "white"}}>
                  Rp185rb
                </Badge>
              </span>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                  Squishy
                </CardTitle>
              }
            >
              <span>
                Squishy - mulai dari
                <Badge className="red" style={{color: "white"}}>
                  Rp55rb
                </Badge>
              </span>
            </Card>
          </Col>

          <Col s={3}>
            <Card
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                  Koleksi Avengers
                </CardTitle>
              }
            >
              <span>
                Koleksi Avengers - mulai dari
                <Badge className="red" style={{color: "white"}}>
                  Rp10rb
                </Badge>
              </span>
            </Card>
          </Col>
        </Row>

        <Row>
          <Pagination items={10} activePage={2} maxButtons={8} />
        </Row>
      </div>
    );
  }
}

export default App;
