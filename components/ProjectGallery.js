// Groups a project's gallery items by their `group` field and renders them
// in the order groups first appear in the data. Each item shows the real
// screenshot cleanly once status is 'ready', or a subtle "ID · Title" label
// over the placeholder while status is 'placeholder'. Swapping an image later
// only means updating `image` and `status` in lib/data.js, this component
// does not need to change.

export default function ProjectGallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  const groups = [];
  const byName = new Map();

  gallery.forEach((item) => {
    if (!byName.has(item.group)) {
      const g = { name: item.group, items: [] };
      byName.set(item.group, g);
      groups.push(g);
    }
    byName.get(item.group).items.push(item);
  });

  return (
    <div className="pg-wrap">
      {groups.map((g) => (
        <div className="pg-group" key={g.name}>
          <h4 className="pg-group-title">{g.name}</h4>
          <div className="pg-grid">
            {g.items.map((item) => (
              <figure className={`pg-item ${item.size === 'large' ? 'pg-item-large' : ''}`} key={item.id}>
                <div className="pg-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  {item.status === 'placeholder' && (
                    <span className="pg-tag">
                      {item.id} · {item.title}
                    </span>
                  )}
                </div>
                {item.status === 'ready' && (item.caption || item.title) && (
                  <figcaption className="pg-caption">{item.caption || item.title}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
