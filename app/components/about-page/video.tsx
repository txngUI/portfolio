import HeroVideoDialog from "../components/ui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative rounded-3xl">
      <HeroVideoDialog
        className="dark:hidden block rounded-3xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/images/cv_video.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block rounded-3xl"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/images/cv_video.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
