package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type book struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Author   string `json:"author"`
	Quantity int    `json:"quantity"`
}

var books = []book{
	{ID: "1", Title: "Blue Train", Author: "John Coltrane", Quantity: 2},
	{ID: "2", Title: "Jeru", Author: "Gerry Mulligan", Quantity: 1},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Author: "Sarah Vaughan", Quantity: 3},
}

func getBooks(c *gin.Context) {
	c.JSON(http.StatusOK, books) 
}

func main() {
	router := gin.Default()

	router.GET("/books", getBooks) 

	router.Run("localhost:8082") 
}
