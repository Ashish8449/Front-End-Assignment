import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getuserData = async (id) => {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setLoading(false);
      setUser(res.data.data);
    };
    setLoading(true);
    setTimeout(() => {
      getuserData(id);
    }, 1000);
  }, [id]);

  return (
    <>
      {loading && <CircularProgress />}
      {!loading && (
        <Card sx={{ maxWidth: 345, mt: 5 }}>
          <CardMedia
            component="img"
            height="200"
            sx={{ objectFit: "cover" }}
            image={`${user.avatar}`}
            alt="User Avatar"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${user.first_name} ${user.last_name}`}
            </Typography>{" "}
            <Typography gutterBottom variant="h5" component="div">
              {`${user.email} `}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dignissimos repellat aperiam dolorum cum! Ut numquam blanditiis
              voluptatem eligendi eveniet repudiandae labore provident minus
              quae, nam officia. Similique, quibusdam provident.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      )}
    </>
  );
}
