import AvatarInit from "avatar-initials";

export function buildUserAvatarURL(url?: string, name?: string, settings?: {size: number, fontSize: number}) {
  if (url || !name) {
    return url;
  }

  let initials = name
    .split(/[ -]/)
    .map((n) => n.charAt(0))
    .join("");
  return AvatarInit.initialAvatar({
    background: "transparent",
    color: "#fff",
    fontFamily: "'Lato', 'Lato-Regular', 'Helvetica Neue'",
    fontSize: 24,
    fontWeight: 350,
    size: 60,
    initials: initials,
    ...settings,
  });
}