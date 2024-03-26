// import * as React from 'react';
import { React} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';
import card1 from './images/card1.jpg';
import news from './images/news.jpg';

export default function ImgMediaCard() {
  const predictionModel = (e) =>{
    e.preventDefault();
    window.location.href = 'http://localhost:8501';
  }

  const webScrapper = (e) => {
    e.preventDefault();
    window.location.href = 'https://www.google.com';
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3%' }} className='main-card'>
      <div className='cardDiv' onClick={predictionModel} >
        {/* <Card sx={{ maxWidth: 365, margin: '0 10px', color: 'red', backdropFilter:'blur(10)'}}> */}
        <Card sx={{ maxWidth: 365, margin: '0 10px', color: 'red', backgroundColor: 'rgba(152,152,152, 0.3)'}} className='card1'>
        <CardMedia
          component="img"
          alt="Prediction Model"
          height="170"
          image={card1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stock Market Prediction Model
          </Typography>
            <Typography variant="body3" color="#cfd8dc">
            Stock market prediction model designed to analyze historical data, trends, and market indicators to forecast future stock prices. The model employs advanced algorithms and machine learning techniques to make predictions with a high degree of accuracy, helping investors make informed decisions about their investments.          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={predictionModel}>Learn More</Button>
        </CardActions>
      </Card>
      </div>
      
      <div className='cardDiv' onClick={webScrapper}>
        <Card sx={{ maxWidth: 365, margin: '0 15px', backgroundColor: 'rgba(152,152,152, 0.3)' }} className='card2'>
        <CardMedia
          component="img"
          alt="Market News"
          height="170"
          image={news}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Market Forecast & News
          </Typography>
            <Typography variant="body3" color="#cfd8dc">
            Providing up-to-date information on the current market situation, including the latest market trends, news, and forecasts. It covers key market indices, economic indicators, and notable events impacting the financial markets. Stay informed about the latest developments to make timely decisions in your investment strategy.
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={webScrapper}>Learn More</Button>
        </CardActions>
      </Card>

      
      </div>
    </div>
  );
}
