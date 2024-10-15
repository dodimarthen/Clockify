package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

var sampleCredentials = map[string]string{
	"email": "johndoe@gmail.com",
	"password": "123",
}

var jwtKey = []byte("your_secret_key")

type Credentials struct {
	Email string `json:"email"`
	Password string `json:"password"`
}

type Claims struct {
	Email string `json:"email"`
	jwt.RegisteredClaims
}

func main() {
	r := gin.Default()

	r.POST("/login", login)

	r.Run(":8082")
}

func login(c *gin.Context) {
	var creds Credentials
	if err := c.ShouldBindJSON(&creds); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
			return
	}

	// Log received credentials
	fmt.Printf("Received credentials: %+v\n", creds)

	if creds.Email != sampleCredentials["email"] || creds.Password != sampleCredentials["password"] {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials. Check your username or password"})
			return
	}

	expirationTime := time.Now().Add(15 * time.Minute)
	claims := &Claims{
		Email: creds.Email,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not generate token"})
		return
	}


	c.JSON(http.StatusOK, gin.H{"token": tokenString})
}