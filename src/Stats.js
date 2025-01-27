export default function Stats({ items }) {
    if (!items.length)
      return (
        <footer className="stats">
          Start adding some items to your packing list 🚀
        </footer>
      );
    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
  
    const percentage = Math.round((numPackedItems / numItems) * 100) || 0;
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "you got everything! get Ready to got ✈️"
            : `🛄 you have ${numItems} item on your list and already packed
          ${numPackedItems} (${percentage} %)`}
        </em>
      </footer>
    );
  }