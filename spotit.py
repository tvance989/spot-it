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
