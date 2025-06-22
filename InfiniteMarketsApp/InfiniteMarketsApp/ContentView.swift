import SwiftUI

struct ContentView: View {
    let card: MarketCard
    init() {
        card = marketCards.randomElement()!
    }
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text(card.market)
                .font(.title)
                .bold()
            Text(card.why)
                .font(.headline)
            Text("Examples: \(card.examples)")
                .font(.subheadline)
            Text("Notables: \(card.notables)")
                .font(.subheadline)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
