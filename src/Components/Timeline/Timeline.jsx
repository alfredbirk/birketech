import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';

// import KolonialLogo from '../../Assets/Kolonial.png';
import TeliaLogo from '../../Assets/Telia.png';
import TelenorLogo from '../../Assets/Telenor.png';
import FinnLogo from '../../Assets/Finn.png';

import Zoom from 'react-reveal/Zoom'; 


const Timeline2 = () => {
    return (
        <Zoom delay={50} duration={1100}>
          <div className="timeline">
              {/* <h1>Professional experience</h1> */}
              <div>
              <Timeline>
                  {/* <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        jan. 2020 - present
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator className="timeline__logo--kolonial-container">
                      <TimelineDot color="primary" variant="default">
                        <img className="timeline__logo timeline__logo--kolonial" src={KolonialLogo} alt="Avatar" />
  
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                          Kolonial
                        </Typography>
                    </TimelineContent>
                  </TimelineItem> */}
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        aug. 2019 - des. 2020
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator className="timeline__logo--telia-container">
                      <TimelineDot color="primary">
                        <img className="timeline__logo timeline__logo--telia" src={TeliaLogo} alt="Avatar" />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                          Telia
                        </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        jun. 2019 - aug. 2019
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator className="timeline__logo--telenor-container">
                      <TimelineDot color="primary">
                      <img className="timeline__logo timeline__logo--telenor" src={TelenorLogo} alt="Avatar" />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                          Telenor
                        </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        jun. 2018 - aug. 2018
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator className="timeline__logo--telenor-container">
                      <TimelineDot color="primary">
                      <img className="timeline__logo timeline__logo--telenor" src={TelenorLogo} alt="Avatar" />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                          Telenor
                        </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                  <TimelineOppositeContent>
                      <Typography variant="body2" color="textSecondary">
                        jun. 2017 - aug. 2017
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator className="timeline__logo--finn-container">
                      <TimelineDot color="primary">
                        <img className="timeline__logo timeline__logo--finn" src={FinnLogo} alt="Avatar" />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                          Finn.no
                        </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
          </div>
        </Zoom>
    )
}

export default Timeline2;