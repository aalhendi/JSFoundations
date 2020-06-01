/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
  totalVideosDuration,
  channelWithMostContent,
  longestChannelName,
} from "./functions";

// Data
import channels from "./channels.json";

describe("getChannelName(channel)", () => {
  test("returns the corrent channel name.", () => {
    const channel = channels[0];
    const channelName = channel.name;
    const result = getChannelName(channel);
    expect(result).toBe(channelName);
  });
});

describe("numberOfVideos(channel)", () => {
  test("returns the corrent number of videos the given channel has.", () => {
    const channel = channels[0];
    const correctNumber = channel.videos.length;
    const result = numberOfVideos(channel);
    expect(result).toBe(correctNumber);
  });
});

describe("channelHasVideo(videoTitle, channel)", () => {
  test("returns true if channel has a video with the given title", () => {
    const channel = channels[0];
    const videoTitle = channel.videos[0].title;
    const result = channelHasVideo(videoTitle, channel);
    expect(result).toBe(true);
  });

  test("returns false if channel doesn't have a video with the given title", () => {
    const channel = channels[0];
    const videoTitle = channel.videos[0].title;
    const result = channelHasVideo(videoTitle, channel);
    expect(result).toBe(true);
  });
});

describe("getChannelByName(channelName, channels)", () => {
  test("returns the correct channel object.", () => {
    const channel = channels[0];
    const channelName = channel.name;
    const result = getChannelByName(channelName, channels);
    expect(result).toBe(channel);
  });

  test("returns undefined if no channel has that name.", () => {
    const channelName = "sflkdsfkdsnfjksdnfkrs";
    const result = getChannelByName(channelName, channels);
    expect(result).toBeUndefined();
  });
});

describe("getChannelByVideoTitle(videoTitle, channels)", () => {
  test("returns the correct channel object.", () => {
    const channel = channels[0];
    const videoTitle = channel.videos[2].title;
    const result = getChannelByVideoTitle(videoTitle, channels);
    expect(result).toBe(channel);
  });

  test("returns undefined if no channel has that video.", () => {
    const videoTitle = "sflkdsfkdsnfjksdnfkrs";
    const result = getChannelByVideoTitle(videoTitle, channels);
    expect(result).toBeUndefined();
  });
});

describe("searchChannels(query, channels)", () => {
  test("returns the correct array of channel objects.", () => {
    const correctChannels = [channels[1], channels[3], channels[4]];
    const query = "and";
    const result = searchChannels(query, channels);
    expect(result).toEqual(correctChannels);
  });

  test("returns an empty array [] if no channel is found.", () => {
    const query = "lerkgjerlgnerljgne";
    const result = searchChannels(query, channels);
    expect(result).toEqual([]);
  });
});

describe("totalVideosDuration(channel)", () => {
  test("returns the correct array of channel objects.", () => {
    const channel = channels[0];
    const totalDuration = channel.videos.reduce(
      (totalDuration, video) => totalDuration + video.duration,
      0
    );
    const result = totalVideosDuration(channel);
    expect(result).toBe(totalDuration);
  });
});

describe("channelWithMostContent(channels)", () => {
  test("returns the correct channel object.", () => {
    const correctChannel = channels[0];
    const result = channelWithMostContent(channels);
    expect(result).toEqual(correctChannel);
  });
});

describe("longestChannelName(channels)", () => {
  test("returns the correct channel object.", () => {
    const correctChannel = channels[3];
    const result = longestChannelName(channels);
    expect(result).toEqual(correctChannel);
  });
});
