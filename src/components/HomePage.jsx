import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';
import { GridList, GridTile } from 'material-ui/GridList';
import './HomePage.css';
import Banner from 'images/bannerNMM.jpg'
import Cow from 'images/cow.jpg'
import Earth from 'images/earth.jpg'
import Hungry from 'images/hungry.jpg'
import You from 'images/run.jpg'
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const tilesData = [
  {
    img: You,
    title: 'Health Yourself',
  },
  {
    img: Cow,
    title: 'Free The Cows',
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
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };


const HomePage = () => (
  <div>
    <Card className="container">
      <CardMedia>
        <img src={Banner}/>
      </CardMedia>
      <CardTitle title="React Application" subtitle="This is the home page." />
    </Card>
    <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
       {tilesData.map((tile) => (
         <GridTile
           key={tile.img}
           title={tile.title}
           actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
           titleStyle={styles.titleStyle}
           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
         >
           <img src={tile.img} />
         </GridTile>
       ))}
     </GridList>
   </div>
 </div>
);

export default HomePage;
