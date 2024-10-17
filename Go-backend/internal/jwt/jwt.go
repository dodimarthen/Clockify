package jwt

import (
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

// JWT Secret for signing tokens
var jwtSecret = []byte("your_secret_key") 

// Claims struct to include in the token
type Claims struct {
    ID       int    `json:"id"`
    Email    string `json:"email"`
    Username string `json:"username"`
    Role     string `json:"role"`
    jwt.RegisteredClaims
}

// GenerateToken creates a new JWT token for the user.
func GenerateToken(id int, email, username, role string) (string, error) {
    claims := Claims{
        ID:       id,
        Email:    email,
        Username: username,
        Role:     role,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Minute * 5)),
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(jwtSecret)
}

// ValidateToken checks the validity of the token and returns claims.
func ValidateToken(tokenStr string) (Claims, error) {
    var claims Claims
    token, err := jwt.ParseWithClaims(tokenStr, &claims, func(token *jwt.Token) (interface{}, error) {
        // Validate the token signing method
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, errors.New("unexpected signing method")
        }
        return jwtSecret, nil
    })

    if err != nil || !token.Valid {
        return Claims{}, err
    }

    return claims, nil
}
