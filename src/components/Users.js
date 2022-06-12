import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import { fetchUsers, usersActions } from "../Reducers/usersSlice";
import User from "./User";

export default function Users() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, users } = useSelector((state) => state.users);

  useEffect(() => {
    if (!id) dispatch(usersActions.startLoading());
    setTimeout(() => {
      dispatch(fetchUsers());
    }, 2000);
  }, [dispatch]);



  return (
    <div>
      <Box
        sx={{
          minHeight: "400px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {loading && <CircularProgress />}
                  {!loading && (
                    <div>Click on the given buttons to get data of user</div>
                  )}
                </>
              }
            />
            <Route exact path="/:id" element={<User />} />
          </Routes>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <Box key={user.id} sx={{ m: 3, mx: 2 }}>
            <Link to={`/${user.id}`}>
              <Button>{user.id}</Button>
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}
