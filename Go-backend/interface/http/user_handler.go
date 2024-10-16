package http

import (
	"net/http"
	"strconv"

	"example/Go-backend/internal/domain"
	"example/Go-backend/usecase"

	"github.com/gin-gonic/gin"
)

type UserHandler struct {
    userUseCase *usecase.UserUseCase
}

func NewUserHandler(userUseCase *usecase.UserUseCase) *UserHandler {
    return &UserHandler{userUseCase: userUseCase}
}

func (h *UserHandler) Login(c *gin.Context) {
    var creds domain.User
    if err := c.ShouldBindJSON(&creds); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
        return
    }

    user, token, valid := h.userUseCase.ValidateCredentials(creds.Email, creds.Password)
    if !valid {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials. Check your email or password"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Login success!", "user": user, "token": token})
}

func (h *UserHandler) GetUsers(c *gin.Context) {
    users := h.userUseCase.GetUsers()
    c.IndentedJSON(http.StatusOK, users)
}

func (h *UserHandler) GetUserByID(c *gin.Context) {
    idParam := c.Param("id")
    id, err := strconv.Atoi(idParam)
    if err != nil {
        c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
        return
    }

    user, found := h.userUseCase.GetUserByID(id)
    if !found {
        c.IndentedJSON(http.StatusNotFound, gin.H{"message": "User not found"})
        return
    }

    c.IndentedJSON(http.StatusOK, user)
}
