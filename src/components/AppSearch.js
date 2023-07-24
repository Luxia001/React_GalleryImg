import './AppSearch.css'

export default function AppSearch(porps) {
  const { value, onValue } = porps;
  return (
    <div className="app-search">
      <input
        className="app-search-input"
        type="text"
        placeholder="Gundam"
        value={value}
        onChange={(event) => {
          onValue(event.target.value);
        }}
      />
    </div>
  );
}
