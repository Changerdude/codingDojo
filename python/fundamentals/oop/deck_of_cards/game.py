from classes.deck import Deck
from classes.player import Player


bicycle = Deck()


# bicycle.show_cards()

def play_game():
    bicycle.shuffle_deck()
    player1 = Player()
    player2 = Player()
    player1.get_hand(bicycle.cards[:26])
    player2.get_hand(bicycle.cards[26:])
    game_in_progress = True

    print(player1.get_hand_size())

    while game_in_progress:
        p1_card = player1.play_card()
        p2_card = player2.play_card()

        if p1_card and p2_card:
            play_round(player1,player2,p1_card,p2_card)
        elif p1_card and not p2_card:
            print("Player one Wins the game!")
            game_in_progress = False
        elif p2_card and not p1_card:
            print("Player two Wins the game!")
            game_in_progress = False

def play_round(p1,p2,p1_card,p2_card):
    print(p1_card.string_val)
    print(p2_card.string_val)
    if p1_card.point_val > p2_card.point_val:
        p1.win_cards([p1_card,p2_card])
        print("Player one wins the round")
        return p1
    elif p2_card.point_val > p1_card.point_val:
        p2.win_cards([p1_card,p2_card])
        print("Player two wins the round!")
        return p2
    else:
        draw(p1,p2)

def draw(p1,p2):
    print("Tie Breaker!")
    pot = []
    if p1.get_hand_size() >= 4 and p2.get_hand_size() >= 4:
        for i in range(2):
            pot.append(p1.play_card())
            pot.append(p2.play_card())
        winner = play_round(p1,p2,p1.play_card(),p2.play_card())
        winner.win_cards(pot)
    else:
        if p1.get_hand_size() != 0 and p2.get_hand_size() != 0:
            if p1.get_hand_size() > p2.get_hand_size():
                for x in range(p2.get_hand_size() - 1):
                    pot.append(p1.play_card())
                    pot.append(p2.play_card())
                winner = play_round(p1,p2,p1.play_card(),p2.play_card())
                winner.win_cards(pot)
            else:
                for x in range(p1.get_hand_size() - 1):
                    pot.append(p1.play_card())
                    pot.append(p2.play_card())
                winner = play_round(p1,p2,p1.play_card(),p2.play_card())
                winner.win_cards(pot)

#Need to split the game into its own class, make a main.py to play


play_game()
