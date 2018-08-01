/* @flow */

import { dedupePostsByUrl, normalizePosts } from './postActions';
import { getBaseUrl } from '../configuration/configuration';

describe('dedupePostsByUrl', () => {
  it('should dedupe posts with localstorage having the precedence', () => {
    expect(dedupePostsByUrl([
      {
        link: 'localstorage1',
        title: 'localstorage1'
      },
      {
        link: 'shared1',
        title: 'localstorageshared1'
      }
    ],
    [
      {
        link: 'shared1',
        title: 'redditshared1'
      },
      {
        link: 'reddit1',
        title: 'reddit1'
      }
    ])).toEqual([
      {
        link: 'localstorage1',
        title: 'localstorage1'
      },
      {
        link: 'shared1',
        title: 'localstorageshared1'
      },
      {
        link: 'reddit1',
        title: 'reddit1'
      }
    ])
  });
});

describe('normalizePosts', () => {
  it('normalizes the posts', () => {
    expect(normalizePosts({
      data: {
      "kind": "Listing",
      "data": {
        "modhash": "g9ya7z06jg830d39724b54926a14cec88828da53d3036542bd",
        "dist": 25,
        "children":
          [
            {
              "kind": "t3",
              "data": {
                "approved_at_utc": null,
                "subreddit": "cats",
                "selftext": "",
                "user_reports": [ ],
                "saved": false,
                "mod_reason_title": null,
                "gilded": 0,
                "clicked": false,
                "title": "I guess I’m having Kitten Salad for dinner.",
                "link_flair_richtext": [
                  {
                    "e": "text",
                    "t": "Cat Picture"
                  }
                ],
                "subreddit_name_prefixed": "r/cats",
                "hidden": false,
                "pwls": 6,
                "link_flair_css_class": "default",
                "downs": 0,
                "thumbnail_height": 140,
                "parent_whitelist_status": "all_ads",
                "hide_score": false,
                "name": "t3_8tdn6z",
                "quarantine": false,
                "link_flair_text_color": "dark",
                "author_flair_background_color": null,
                "subreddit_type": "public",
                "ups": 7742,
                "domain": "i.redd.it",
                "media_embed": { },
                "thumbnail_width": 140,
                "author_flair_template_id": null,
                "is_original_content": false,
                "secure_media": null,
                "is_reddit_media_domain": true,
                "category": null,
                "secure_media_embed": { },
                "link_flair_text": "Cat Picture",
                "can_mod_post": false,
                "score": 7742,
                "approved_by": null,
                "thumbnail": "https://b.thumbs.redditmedia.com/0fhruPja_VlEsYLPx2ME1tsf10-NylsgyTlQKWV9j9M.jpg",
                "edited": false,
                "author_flair_css_class": null,
                "author_flair_richtext": [ ],
                "post_hint": "image",
                "content_categories": null,
                "is_self": false,
                "mod_note": null,
                "created": 1529823461,
                "link_flair_type": "richtext",
                "wls": 6,
                "post_categories": null,
                "banned_by": null,
                "author_flair_type": "text",
                "contest_mode": false,
                "selftext_html": null,
                "likes": null,
                "suggested_sort": null,
                "banned_at_utc": null,
                "view_count": null,
                "archived": false,
                "no_follow": false,
                "is_crosspostable": true,
                "pinned": false,
                "over_18": false,
                "preview": {
                  "images": [
                    {
                      "source": {
                        "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?s=6123b11151113fd01da55ae237274469",
                        "width": 3024,
                        "height": 4032
                      },
                      "resolutions": [
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=108&s=2424d5da2ef249684085a8c7087f32a7",
                          "width": 108,
                          "height": 144
                        },
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=efea5f01955bd14a9c860f2d8db122eb",
                          "width": 216,
                          "height": 288
                        },
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=320&s=cabf913b2fcacb1cb42a06b7aa5de99d",
                          "width": 320,
                          "height": 426
                        },
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=42761819fda5c59870abfef9896c070f",
                          "width": 640,
                          "height": 853
                        },
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=960&s=9396b616539e32dd23d61db912994997",
                          "width": 960,
                          "height": 1280
                        },
                        {
                          "url": "https://i.redditmedia.com/9blzxnS8H95IgVrHyW-5SsirLOrLJBlPAjSPzGJPKJs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=1080&s=df93293106a37c49e433c8d4771de121",
                          "width": 1080,
                          "height": 1440
                        }
                      ],
                      "variants": { },
                      "id": "1HLmfJ1kV_1Uo6gY0B8KhFZE2CUqMl7_dPTgW5v2d54"
                    }
                  ],
                  "enabled": true
                },
                "media_only": false,
                "can_gild": true,
                "spoiler": false,
                "locked": false,
                "author_flair_text": null,
                "rte_mode": "markdown",
                "visited": false,
                "num_reports": null,
                "distinguished": null,
                "subreddit_id": "t5_2qhta",
                "mod_reason_by": null,
                "removal_reason": null,
                "link_flair_background_color": "",
                "id": "8tdn6z",
                "report_reasons": null,
                "author": "ava_holden",
                "num_crossposts": 0,
                "num_comments": 108,
                "send_replies": true,
                "mod_reports": [ ],
                "author_flair_text_color": null,
                "permalink": "/r/cats/comments/8tdn6z/i_guess_im_having_kitten_salad_for_dinner/",
                "whitelist_status": "all_ads",
                "stickied": false,
                "url": "https://i.redd.it/2f83zn5ezt511.jpg",
                "subreddit_subscribers": 746629,
                "created_utc": 1529794661,
                "media": null,
                "is_video": false
              }
            }
          ]
        }
      }
    })).toEqual([
      {
        id: '8tdn6z',
        title: 'I guess I’m having Kitten Salad for dinner.',
        thumbnail: 'https://b.thumbs.redditmedia.com/0fhruPja_VlEsYLPx2ME1tsf10-NylsgyTlQKWV9j9M.jpg',
        link: getBaseUrl() + '/r/cats/comments/8tdn6z/i_guess_im_having_kitten_salad_for_dinner/',
        upvotes: 7742,
        createdEpochSeconds: 1529794661,
        saved: false
      }
    ]);
  })
});
