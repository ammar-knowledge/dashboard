import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Stack from '@mui/material/Stack';
import CoursePlaceHolder from 'assets/images/course.jpg'



export default function ContentCards({course}) {
    return (
        <>
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
                                    {course.name}
                                </Typography>
                            </Stack>
                            <div style={{ width: 50, height: 50 }}>
                                <CircularProgressbar value={66} text={`${66}%`} />
                            </div>
                        </div>
                        <Stack direction='column' spacing={1}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Grade</Typography>
                                <Typography variant="body2" color="text.secondary">{course.from_grade} - {course.to_grade}</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Date</Typography>
                                <Typography variant="body2" color="text.secondary">{course.created_at.split('T')[0]}</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">Age</Typography>
                                <Typography variant="body2" color="text.secondary">{course.from_age} - {course.to_age}</Typography>
                            </div>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
