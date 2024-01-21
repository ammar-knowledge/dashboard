import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import Stack from '@mui/material/Stack';
import CoursePlaceHolder from 'assets/images/course.jpg'

export default function ContentCards({activity}) {

    const formatDuration = (seconds) => {
        // Calculate hours, minutes, and remaining seconds
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        
        // Add leading zeros if needed
        var formattedHours = hours < 10 ? '0' + hours : hours;
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
        // Return the formatted string
        return formattedHours + ':' + formattedMinutes;
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="260"
                    image={CoursePlaceHolder}
                    alt=""
                />
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Stack direction='column' spacing={1}>
                            <Typography gutterBottom variant="h5" component="div" >
                                {activity.name}
                            </Typography>
                        </Stack>
                    </div>
                    <Stack direction='column' spacing={1}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">Grade</Typography>
                            <Typography variant="body2" color="text.secondary">{activity.from_grade} - {activity.to_grade}</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">Duration</Typography>
                            <Typography variant="body2" color="text.secondary">{formatDuration(activity.duration)}</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary">Age</Typography>
                            <Typography variant="body2" color="text.secondary">{activity.from_age} - {activity.to_age}</Typography>
                        </div>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
