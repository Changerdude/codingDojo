import random

class Player:
    def __init__(self):
        self.hand = []
        self.discard = []

    def get_hand(self, hand):
        self.hand = hand
        return self

    def get_hand_size(self):
        return len(self.hand)

    def play_card(self):
        if len(self.hand) == 0:
            if len(self.discard) == 0:
                return False
            else:
                self.hand = self.discard
                self.discard = []
        return self.hand.pop()

    def win_cards(self, card_list):
        self.discard.extend(card_list)
        random.shuffle(self.discard)
        return self