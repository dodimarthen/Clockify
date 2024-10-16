package usecase

import (
	"example/Go-backend/internal/domain"
	"example/Go-backend/internal/jwt"
)

type UserUseCase struct {
    users []domain.User
}

func NewUserUseCase(users []domain.User) *UserUseCase {
    return &UserUseCase{users: users}
}

// ValidateCredentials checks if the user's email and password are valid.
// It returns the user and a JWT token if valid.
func (u *UserUseCase) ValidateCredentials(email, password string) (*domain.User, string, bool) {
    for _, user := range u.users {
        if user.Email == email && user.Password == password {
            token, err := jwt.GenerateToken(user.ID, user.Email, user.Username, user.Role) // Generate JWT
            if err != nil {
                return nil, "", false
            }
            return &user, token, true
        }
    }
    return nil, "", false
}

func (u *UserUseCase) GetUsers() []domain.User {
    return u.users
}

func (u *UserUseCase) GetUserByID(id int) (*domain.User, bool) {
    for _, user := range u.users {
        if user.ID == id {
            return &user, true
        }
    }
    return nil, false
}
