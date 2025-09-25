import pygame
import random

# Initiera Pygame
pygame.init()

# Skärmstorlek
WIDTH, HEIGHT = 600, 400
win = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Avoid the Falling Objects")

# Färger
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (200, 0, 0)
GREEN = (0, 200, 0)

# Spelvariabler
player_width, player_height = 50, 50
player_x = WIDTH // 2 - player_width // 2
player_y = HEIGHT - player_height - 10
player_speed = 6

obstacle_width, obstacle_height = 40, 40
obstacle_x = random.randint(0, WIDTH - obstacle_width)
obstacle_y = -40
obstacle_speed = 5

score = 0
clock = pygame.t
