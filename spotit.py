import random

# Tucker Method
print 'Tucker Method'
print

symbolsPerCard = 4

cards = []

counter = 0

for i in range(symbolsPerCard + 1):
    cards.append([])
    for j in range(symbolsPerCard):
        if j < i:
            cards[i].append(cards[j][i-1])
        else:
            cards[i].append(counter)
            counter += 1

print cards
print
print len(cards), 'cards'
print symbolsPerCard, 'symbols per card'
print counter, 'unique symbols'



# Taylor Method
print
print 'Taylor Method'

symbolsPerCard = 3
numCards = 4

# symbols = ['red','blue','green','cyan','yellow','magenta','black']
# symbols = ['a','b','c','d','e','f','g','h','i','j','k']
symbols = ['a','b','c','d','e','f']

cards = []
for i in range(numCards):
    print
    print'CARD',i
    available = set(symbols)
    thisCard = []
    if i > 0:
        print'--getting matching symbols'
        for j in range(i):
            print'comparing with card',j,cards[j]
            print'options',list(set(cards[j]) & available)
            choice = random.choice(list(set(cards[j]) & available))
            print'choice',choice
            thisCard.append(choice)
            available -= set(cards[j])
    print'--getting other symbols'
    if len(thisCard) < symbolsPerCard:
        for j in range(symbolsPerCard - len(thisCard)):
            print'options',available
            choice = random.sample(available,1)[0]
            print'choice',choice
            thisCard.append(choice)
            available -= set(choice)
    print'--card',i,thisCard
    cards.append(thisCard)

print
print 'cards'
for c in cards:
    print c



# Recursive Method
print
print 'Recursive Method'

symbolsPerCard = 3
numCards = 5

# symbols = ['a','b','c','d','e','f']
symbols = set(['a','b','c','d','e','f','g','h','i','j','k'])

def chooseFromAvailable(card, available):
    print'available',available
    choice = random.sample(available,1)[0]
    card.append(choice)
    available -= set(choice)
    print card

    if len(card) < symbolsPerCard:
        print'choosing again'
        return chooseFromAvailable(card, available)
    else:
        print'returning card',card
        return card

def matchPreviousCards(card, cardsToMatch):
    pass

cards = []
for i in range(numCards):
    card = []
    cardsToMatch = cards
    card = matchPreviousCards(card, cardsToMatch)
    card = chooseFromAvailable(card, symbols)
    cards.append(card)

print
print 'cards'
for c in cards:
    print c
