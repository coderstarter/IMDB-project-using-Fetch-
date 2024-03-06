import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`https://image.tmdb.org/t/p/original${props.data.poster_path}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.data.overview}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard