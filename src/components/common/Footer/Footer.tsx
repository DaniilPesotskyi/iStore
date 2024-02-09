import { PrismicNextLink } from "@prismicio/next";
import { FooterDocument, SettingsDocument } from "../../../../prismicio-types";
import css from "./Footer.module.css";

interface IProps {
  settings: SettingsDocument<string>;
  footer: FooterDocument<string>;
  lang: string;
}

const Footer: React.FC<IProps> = ({ settings, footer, lang }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.main}>
          <div>
            <PrismicNextLink
              className={css.logo}
              field={settings.data.homepage}
            >
              <AppleIcon className={css.logoIcon} />
              IStore
            </PrismicNextLink>
            <ul className={css.contacts}>
              <li className={css.contactsItem}>
                <span className={css.contactsLabel}>E-MAIL:</span>
                <a href={`mailto:${footer.data.email}`}>{footer.data.email}</a>
              </li>
              <li className={css.contactsItem}>
                <span className={css.contactsLabel}>
                  {lang === "uk-ua"
                    ? "ГОДИНИ ОБСЛУГОВУВАННЯ:"
                    : "SERVICE HOURS:"}
                </span>
                {footer.data.time}
              </li>
            </ul>
            <p className={css.delivery}>{footer.data.delivery}</p>
          </div>
          <div>
            <ul className={css.contactsList}>
              {footer.data.socials.map((i, index) => (
                <li key={index}>
                  <PrismicNextLink className={css.contactsLink} field={i.link}>
                    {i.icon === "instagram" && (
                      <InstagramIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "facebook" && (
                      <FacebookIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "tiktok" && (
                      <TiktokIcon className={css.contactsIcon} />
                    )}
                    {i.icon === "youtube" && (
                      <YoutubeIcon className={css.contactsIcon} />
                    )}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
            <ul className={css.payments}>
              <li>
                <MastercardIcon />
              </li>
              <li>
                <VisaIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.copy}>
          <span>
            {year}.{footer.data.copy_text}
          </span>
          <span>Developed by Danya Pesotskyi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="69"
      height="21"
      fill="none"
    >
      <path
        fill="#3362AB"
        d="M64 0h-4c-2 0-3 1-3 2l-9 19h6l1-3h8v3h5L64 0zm-7 13a353 353 0 003-7v2l2 6h-5v-1zm-8 1c0 4-4 7-10 7l-6-1 1-5v1l6 1 3-2-3-3c-2-1-5-2-5-5 0-4 4-7 10-7l5 1-1 4h-1l-4-1c-2 0-3 1-3 2s1 2 3 2c3 2 5 4 5 6z"
      ></path>
      <path fill="#F9B50B" d="M0 1V0h9l2 2 2 9C11 6 7 2 0 1z"></path>
      <path
        fill="#3362AB"
        d="M25 0l-9 21h-5L6 4c3 2 6 5 7 8l1 2 5-14h6zm2 0h6l-4 21h-5l3-21z"
      ></path>
    </svg>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="39"
      fill="none"
    >
      <path fill="#F9B50B" d="M65 20a20 20 0 11-39-1 20 20 0 0139 1z"></path>
      <path
        fill="#C8191C"
        d="M39 20v-4H27v-3h11l-1-2h-9l1-2h7l-2-2h-3l2-2c-4-3-8-5-14-5C9 0 0 9 0 20a20 20 0 0033 14l2-2h-4l-2-2h7l1-2h-9l-1-2h11l1-6z"
      ></path>
      <path
        fill="#fff"
        d="M26 24l1-1h-1v-4h1l1-2h-1v-2h-2l-2 8 2 2 1-1z"
      ></path>
      <path
        fill="#fff"
        d="M27 21c0 3 2 4 4 4h2v-2h-2c-2 0-2-2-2-2h4l1-2c0-1-1-3-3-3s-4 3-4 5zm4-3l1 2h-3l2-2zm13 6v-2l-2 1c-1 0-2-1-2-3s2-4 3-4l2 1v-2l-2-1c-3 0-5 2-5 6 0 3 1 5 4 5l2-1zm-29-8l-2 1-1 2 3-1 1 1h-1c-2 0-4 1-4 3s1 3 2 3l2-1v1h2l1-6c0-3-2-3-3-3zm1 5l-2 2-1-1 2-1h1z"
      ></path>
      <path
        fill="#fff"
        d="M20 25s3 0 3-3-3-2-3-3l2-1h1v-2h-2c-1 0-3 1-3 3s3 2 3 3l-1 1-2-1-1 2 3 1zm41-10v3l-2-1c-2 0-4 2-4 5 0 1 1 3 3 3l2-1v1h2l1-10h-2zm-1 5c0 1 0 3-2 3l-1-2c0-2 1-3 2-3l1 2zM4 25l1-8v8h2l2-8-1 8h2l2-10H9l-2 6v-6H4L2 25h2zm32 0c0-4 1-7 2-6l1-2h-1l-1 1v-1h-2l-1 8h2zm13-9l-3 1v2l2-1 1 1h-1c-1 0-3 1-3 3s1 3 2 3l2-1v1h2l1-6c0-3-3-3-3-3zm0 5l-1 2-1-1 2-1z"
      ></path>
      <path fill="#fff" d="M53 25c1-4 1-7 2-6l1-2-2 1v-1h-2l-1 8h2z"></path>
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        d="M2.262 15.057a2.57 2.57 0 01-1.043-.602 2.487 2.487 0 01-.642-1.004c-.734-1.964-.952-10.164.462-11.783A2.743 2.743 0 012.888.766C6.68.368 18.398.42 19.743.898c.379.12.725.322 1.012.591.287.269.508.598.646.962.802 2.03.83 9.408-.108 11.358a2.538 2.538 0 01-1.183 1.168c-1.413.69-15.972.677-17.848.08zm6.022-3.848l6.797-3.45-6.797-3.477v6.927z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="22"
      fill="none"
    >
      <path d="M18.976 5.254A5.253 5.253 0 0113.723 0H9.969v14.697a3.192 3.192 0 11-2.29-3.065V7.984a6.774 6.774 0 105.869 6.713l.109-7.429a8.966 8.966 0 005.319 1.739V5.254z"></path>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path d="M10 1.807h4.096c.964 0 1.446.241 1.808.362.482.24.843.361 1.204.723.362.361.603.722.723 1.204.12.362.241.844.362 1.808v8.192c0 .964-.241 1.446-.362 1.808-.24.482-.361.843-.723 1.204-.361.362-.723.603-1.204.723-.362.12-.844.241-1.808.362H5.904c-.964 0-1.446-.241-1.808-.362-.482-.24-.843-.361-1.204-.723-.362-.361-.603-.723-.723-1.204-.12-.362-.241-.844-.362-1.808V5.904c0-.964.241-1.446.362-1.808.24-.482.361-.843.723-1.204.361-.362.722-.603 1.204-.723.362-.12.844-.241 1.808-.362H10zM10 0H5.904c-1.085 0-1.808.241-2.41.482a5.26 5.26 0 00-1.807 1.205C1.084 2.289.843 2.77.482 3.494.24 4.096.12 4.819 0 5.904v8.192c0 1.085.241 1.808.482 2.41a5.262 5.262 0 001.205 1.807c.602.603 1.084.844 1.807 1.205.602.241 1.325.361 2.41.482h8.192c1.085 0 1.808-.241 2.41-.482a5.263 5.263 0 001.807-1.205c.603-.602.844-1.084 1.205-1.807.241-.602.361-1.325.482-2.41V5.904c0-1.085-.241-1.808-.482-2.41a5.261 5.261 0 00-1.205-1.807c-.602-.603-1.084-.844-1.807-1.205C15.904.24 15.181.12 14.096 0H10z"></path>
      <path d="M10 4.82A5.142 5.142 0 004.82 10c0 2.892 2.288 5.18 5.18 5.18s5.18-2.288 5.18-5.18S12.893 4.82 10 4.82zm0 8.553A3.368 3.368 0 016.627 10 3.368 3.368 0 0110 6.627 3.368 3.368 0 0113.373 10c0 1.807-1.566 3.373-3.373 3.373zm5.301-7.469a1.205 1.205 0 100-2.41 1.205 1.205 0 000 2.41z"></path>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="23"
      fill="none"
    >
      <path d="M7.657 12.365h3.722l.585-3.804H7.656V6.48c0-1.58.514-2.981 1.983-2.981H12V.18C11.585.123 10.708 0 9.05 0 5.588 0 3.559 1.84 3.559 6.03v2.53H0v3.805h3.559V22.82A14.33 14.33 0 005.71 23c.662 0 1.309-.06 1.947-.148V12.365z"></path>
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path d="M28.417 33.8c-1.634 1.583-3.417 1.333-5.134.583-1.816-.766-3.483-.8-5.4 0-2.4 1.034-3.666.734-5.1-.583-8.133-8.383-6.933-21.15 2.3-21.617 2.25.117 3.817 1.234 5.134 1.334 1.966-.4 3.85-1.55 5.95-1.4 2.516.2 4.416 1.2 5.666 3-5.2 3.116-3.966 9.966.8 11.883-.95 2.5-2.183 4.983-4.233 6.817l.017-.017zM20.05 12.083C19.8 8.367 22.817 5.3 26.283 5c.484 4.3-3.9 7.5-6.233 7.083z"></path>
    </svg>
  );
}
