const serviceDomain = import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN as string | undefined;
const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY as string | undefined;

const fmt = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
});

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type MicroCMSImage = { url: string };
type NewsItem = {
  datetime: string;
  title: string;
  img?: MicroCMSImage;
  details?: string;
  link?: string;
};

async function loadNews() {
  const container = document.getElementById("news-list");
  if (!container) return;

  if (!serviceDomain || !apiKey) {
    container.innerHTML = "<p>現在、ニュースはありません。</p>";
    return;
  }

  try {
    const res = await fetch(
      `https://${serviceDomain}.microcms.io/api/v1/news?limit=100&orders=-datetime`,
      { headers: { "X-MICROCMS-API-KEY": apiKey } }
    );
    const { contents }: { contents: NewsItem[] } = await res.json();

    if (contents.length === 0) {
      container.innerHTML = "<p>現在、ニュースはありません。</p>";
      return;
    }

    container.innerHTML = contents
      .map(
        (s) => `
        <article class="news">
          <div class="news__meta">
            <time class="news__datetime" datetime="${esc(s.datetime)}">
              ${fmt.format(new Date(s.datetime))}
            </time>
          </div>
          <h2 class="news__title">${esc(s.title)}</h2>
          ${s.img ? `<img class="news__img" src="${esc(s.img.url)}" alt="" loading="lazy">` : ""}
          ${s.details ? `<p class="news__details">${esc(s.details)}</p>` : ""}
          ${s.link ? `<a class="news__link" href="${esc(s.link)}" target="_blank" rel="noopener noreferrer">詳細を見る</a>` : ""}
        </article>
      `
      )
      .join("");
  } catch {
    container.innerHTML = "<p>現在、ニュースはありません。</p>";
  }
}

loadNews();
