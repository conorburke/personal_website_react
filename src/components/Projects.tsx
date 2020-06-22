import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import magnetar from '../images/magnetar_tools_page.png';
import mancala from '../images/mancala.png';
import seespotgo from '../images/seespotgo.png';
import telescopes from '../images/telescopes.png';
import walter from '../images/walter.png';
import blacksmith from '../images/blacksmith.png';

const useStyles = makeStyles({
  card: {
    maxWidth: '28%',
    minWidth: '300px',
    margin: 20,
    border: '2px solid whitesmoke', 
    borderRadius: '10px'
  },
});

const Projects: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Projects</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              max-width="100%"
              image={blacksmith}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Reloto
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Reloto is an event-based microservice built using Kubernetes, TypeScript, MongoDB, and NATS
                Streaming Server. It allows users to rent/loan tools and is the newer version of thee Magnetar
                project. It is hosted on Digital Ocean and is in active development. It will soon be reachable by
                users at the domain reloto.app. It has an associated custom NPM module for shared resources.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='https://reloto.app' target='_blank' rel="noopener noreferrer">Website</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/reloto' target='_blank' rel="noopener noreferrer">Github (Platform)</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/reloto-common' target='_blank' rel="noopener noreferrer">Github (NPM Module)</a>
            </Button>
          </CardActions>
        </Card>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={magnetar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Magnetar
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Magnetar is a tool renting/loaning platform. Built with a GraphQL Node backend, it has
                a PWA frontend built with React/TypeScript (and a React Native app). Magnetar uses NGINX for load 
                balancing and Postgres for storage. It also incorporates the Stripe API as well as S3 for image
                storage. Hosted on AWS. I custom wrote all the GraphQL resolvers for full CRUD capabilities.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='http://magnetar-env.pjsnaganrf.us-east-2.elasticbeanstalk.com/' target='_blank' rel="noopener noreferrer">Website</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/magnetar_platform' target='_blank' rel="noopener noreferrer">Github (Platform)</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/magnetar_mobile' target='_blank' rel="noopener noreferrer">Github (Mobile)</a>
            </Button>
          </CardActions>
        </Card>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={mancala}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mancala AI
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Mancala AI is a recent project built in Python that I am currently developing to implement AI techniques
                that I am studying. It has agents that implement Alpha-beta pruning / mini-max or a Monte Carlo algorithm to figure out the best moves given current game state. I plan to utilize Keras/TensorFlow in order allow it to learn. 
                Currently the agent I developed beats a novice player 99.8% of the time.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/mancala_ai' target='_blank' rel="noopener noreferrer">Github</a>
            </Button>
          </CardActions>
        </Card>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={walter}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Walter's Notebook
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Walter's Notebook is a containerized microservice platform. Its main components are an ETL pipeline and
                API (written in Go), datastore, and React frontend component. It pulls publicly available fantasy football 
                spreadsheets, processes and transforms them, and stores them for the API to serve. Hosted on
                AWS, it has a CI/CD toolchain that deploys docker containers.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='http://fantasy.us-east-2.elasticbeanstalk.com/' target='_blank' rel="noopener noreferrer">Website</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/fantasy' target='_blank' rel="noopener noreferrer">Github</a>
            </Button>
          </CardActions>
        </Card>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={seespotgo}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                SeeSpotGo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                SeeSpotGo is a Rails app that allows users to loan and rent parking spaces. The use case
                is analogous to AirBnB but for parking spaces. In addition to that capability, the app
                takes advantages of WebSockets to allow loaners and renters the ability to confirm details via chat rooms.
                It has an intuitive searching function aided by Google Maps API.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='http://seespotgo.herokuapp.com/' target='_blank' rel="noopener noreferrer">Website</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/seespotgo' target='_blank' rel="noopener noreferrer">Github</a>
            </Button>
          </CardActions>
        </Card>
        <Card className={`${classes.card} project-card`}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={telescopes}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Telescopes Are Time Machines
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Telescopes Are Time Machines is a Rails app developed to provide a community forum for people 
                interested in astronomical events. It has a news feed bolstered by NASA's Twitter account,
                and like SeeSpotGo it takes advantage of WebSockets to have multiple chat rooms. This allows
                users to converse with those who share a love of astronomy.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href='http://telescopesaretimemachines.herokuapp.com/' target='_blank' rel="noopener noreferrer">Website</a>
            </Button>
            <Button size="small" color="primary">
              <a href='https://github.com/conorburke/telescopes-are-time-machines' target='_blank' rel="noopener noreferrer">Github</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
