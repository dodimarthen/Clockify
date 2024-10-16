package main

import (
	"example/Go-backend/interface/http"
	"example/Go-backend/internal/domain"
	"example/Go-backend/usecase"

	"github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

    // Sample users (this could be replaced with a database call)
    users := []domain.User{
        {ID: 1, Email: "johndoe@gmail.com", Password: "123", Username: "John Doe", Role: "Software Engineer"},
        {ID: 2, Email: "johncole@yopmail.com", Password: "1223", Username: "John Coltrane", Role: "IT Support"},
        {ID: 3, Email: "testuser@gmail.com", Password: "1223", Username: "Test User", Role: "Tester"},
    }

    userUseCase := usecase.NewUserUseCase(users)
    userHandler := http.NewUserHandler(userUseCase)

    r.POST("/login", userHandler.Login)               // Post Login Route
    r.GET("/user", userHandler.GetUsers)              // Get Users Route
    r.GET("/user/:id", userHandler.GetUserByID)      // Get User by ID Route

    r.Run(":8082")
}
