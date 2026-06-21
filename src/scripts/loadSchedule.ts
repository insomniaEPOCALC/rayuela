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
type ScheduleItem = {
  datetime: string;
  title: string;
  ticket?: string;
  flyer?: MicroCMSImage;
  details?: string;
  link?: string;
  linkTitle?: string;
  extraLink?: string;
  extraLinkTitle?: string;
};

async function loadSchedule() {
  const container = document.getElementById("schedule-list");
  if (!container) return;

  if (!serviceDomain || !apiKey) {
    container.innerHTML = "<p>現在、スケジュールはありません。</p>";
    return;
  }

  try {
    const res = await fetch(
      `https://${serviceDomain}.microcms.io/api/v1/schedules?limit=100&orders=-datetime`,
      { headers: { "X-MICROCMS-API-KEY": apiKey } }
    );
    const { contents }: { contents: ScheduleItem[] } = await res.json();

    if (contents.length === 0) {
      container.innerHTML = "<p>現在、スケジュールはありません。</p>";
      return;
    }

    container.innerHTML = contents
      .map(
        (s) => `
        <article class="schedule">
          <div class="schedule__meta">
            <time class="schedule__datetime" datetime="${esc(s.datetime)}">
              ${fmt.format(new Date(s.datetime))}
            </time>
            ${s.ticket ? `<span class="schedule__ticket">${esc(s.ticket)}</span>` : ""}
          </div>
          <h2 class="schedule__title">${esc(s.title)}</h2>
          <div class="schedule__details-wrapper">
            ${s.flyer ? `<img class="schedule__img" src="${esc(s.flyer.url)}" alt="" loading="lazy">` : ""}
            ${s.details ? `<p class="schedule__details">${esc(s.details)}</p>` : ""}
          </div>
          <div class="schedule__links_wrapper">
            ${s.link ? `<a class="schedule__link" href="${esc(s.link)}" target="_blank" rel="noopener noreferrer">◉${esc(s.linkTitle ?? "詳細を見る")}</a>` : ""}
            ${s.extraLink ? `<a class="schedule__link" href="${esc(s.extraLink)}" target="_blank" rel="noopener noreferrer">◉${esc(s.extraLinkTitle ?? "詳細を見る")}</a>` : ""}
          </div>
        </article>
      `
      )
      .join("");
  } catch {
    container.innerHTML = "<p>現在、スケジュールはありません。</p>";
  }
}

loadSchedule();
