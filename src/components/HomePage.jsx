import React from 'react';
import { Link } from 'react-router-dom';
// css
import './HomePage.css';
// material-ui
import { Card, CardMedia } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
// images
import Banner from 'images/bannerNMM.jpg'
import Cow from 'images/cow.jpg'
import Earth from 'images/earth.jpg'
import Hungry from 'images/hungry.jpg'
import You from 'images/run.jpg'


const tilesData = [
  {
    img: You,
    title: 'Health Yourself',
  },
  {
    img: Cow,
    title: 'Free The Animals',
  },
  {
    img: Earth,
    title: 'Save Our Home',
  },
  {
    img: Hungry,
    title: 'Food Equality',
  },
  ]

  const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    background: '#f7db07',
    marginLeft: '10%',
    marginRight: '10%',
    boxShadow: '0px 0px 50px -30px #000'
  },
  gridList: {
    width: 1000,
    height: 550,
    // overflowY: 'auto',
  },
  tiles: {
    border: '2px solid #646fe2',
  },
  title: {
    color: '#f7db07',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  button: {
    background: '#f7db07',
    color: '#646fe2',
    height: '100px',
    width: '700px'
  },
  overlay: {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: '46px',
    fontWeight: 'bold',
    color: '#646fe2',
    fontFamily: 'Kelly Slab',
  },

};


const HomePage = () => (
  <div>
    <Card className="container banner">
      <CardMedia>
        <img src={Banner}/>
      </CardMedia>
    </Card>
    <br/>
    <br/>
    <div style={styles.root}>
      <GridList style={styles.gridList} padding={10} cols={2} cellHeight={280}>
        {tilesData.map((tile) => (
          <GridTile
            style={styles.tiles}
            key={tile.img}
            titleStyle={styles.title}
            title={tile.title}
            titleBackground="linear-gradient(to top, rgba(100,111,226, .9) 0%,rgba(100,111,226,.7) 70%,rgba(100,111,226, 0) 100%)"
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    <br/>
    <br/>
    <br/>
    <Card className="container">
      <Link to="/signup"><RaisedButton label="Let's Get Started!!" labelStyle={styles.label} fullWidth={true} buttonStyle={styles.button} overlayStyle={styles.overlay} /></Link>
    </Card>
  </div>
);

export default HomePage;
