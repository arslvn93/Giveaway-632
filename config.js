const config = {
  "modalQuestions": [
    {
      "id": "event_attendance",
      "questionText": "How often do you attend local sports events like baseball games?",
      "options": [
        { "value": "rarely", "text": "Rarely" },
        { "value": "few_times_year", "text": "A few times a year" },
        { "value": "monthly", "text": "Monthly" },
        { "value": "weekly", "text": "Weekly" }
      ]
    },
    {
      "id": "leisure_preferences",
      "questionText": "When choosing leisure activities, which factors are most important to you?",
      "options": [
        { "value": "proximity_home", "text": "Proximity to home" },
        { "value": "community_involvement", "text": "Community involvement" },
        { "value": "variety_experiences", "text": "Variety of experiences" },
        { "value": "exclusivity", "text": "Exclusivity/unique offers" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How do you typically stay informed about events and offers in your neighborhood?",
      "options": [
        { "value": "social_media", "text": "Social media" },
        { "value": "direct_mail_flyers", "text": "Direct mail and flyers" },
        { "value": "local_newsletters", "text": "Local newsletters/newspapers" },
        { "value": "word_of_mouth", "text": "Word of mouth" }
      ]
    },
    {
      "id": "future_lifestyle",
      "questionText": "Imagine you could design your ideal day around your favorite activity. What does that day look like?",
      "options": [
        { "value": "sports_events", "text": "Enjoying a full day of sports events" },
        { "value": "community_cultural", "text": "Attending a mix of community and cultural activities" },
        { "value": "relax_home", "text": "A day of relaxation at home" },
        { "value": "traveling", "text": "Traveling out of town for unique experiences" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Ticket Giveaway",
    "heroHeadline": "Win <span class='highlight'>$100 Worth of Jays Tickets</span> This Canada Day!",
    "heroSubheadline": "Enter for your chance to cheer on the Jays live and make unforgettable summer memories!",
    "promotionDates": "Enter from June 18, 2025 to July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/f7b82yg4sxrm80cqftrtc44gec.jpg",
    "heroCtaText": "Enter to Win Now!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Blue Jays $100 Ticket Giveaway</strong> has been submitted successfully. Good luck!",
    "successModalEmailPrompt": "Winner will be announced via email after July 2, 2025. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "$100 Worth of Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Win $100 worth of tickets to a Blue Jays baseball game. Enjoy the excitement of live sports, the energy of the crowd, and making unforgettable memories with friends or family during Canada Day!",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/v67m4g26j5rme0cqftrsr90hpm.jpg",
        "alt": "Blue Jays Tickets"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/1g5pvcm909rme0cqftrs21j328.jpg",
        "alt": "Cheering Crowd at Stadium"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/bv8pampdd5rmc0cqftrsr3vj5w.jpg",
        "alt": "Baseball Game Action"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/kg8gmy8gdsrmc0cqftsbfqyc40.jpg",
        "alt": "Stadium Seating"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of valid Blue Jays game tickets" },
      { "icon": "fas fa-users", "text": "Bring a friend or enjoy with family" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live baseball excitement" },
      { "icon": "fas fa-calendar-check", "text": "Enjoy during the Canada Day festivities" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-qrcode",
        "title": "Scan and Win",
        "description": "Use our QR code to sign up instantly at the Canada Day event booth."
      },
      {
        "icon": "fas fa-envelope",
        "title": "Check Your Inbox",
        "description": "We'll keep you updated on your entry status via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Live Baseball Experience" },
      { "icon": "fas fa-calendar-day", "text": "Celebrate Canada Day with us" },
      { "icon": "fas fa-gift", "text": "Win $100 Worth of Tickets" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win tickets to a Blue Jays game this Canada Day!",
    "entryCountText": "Join the hundreds of baseball enthusiasts already entered!",
    "socialSharePrompt": "Share the excitement and invite friends to enter:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Blue Jays $100 Ticket Giveaway this Canada Day!")
    },
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Random Selection",
      "text": "Winner selection is completely random to ensure fairness, with the draw held on July 2, 2025."
    },
    "importantNotice": {
      "title": "Winner Notification",
      "text": "The winner will be contacted via the email provided during entry. Please check all inbox folders after the giveaway."
    },
    "faq": [
      {
        "q": "Who can enter?",
        "a": "Open to legal residents 18+ in the area."
      },
      {
        "q": "When does the giveaway run?",
        "a": "From June 18, 2025, until July 2, 2025, 11:59 PM local time."
      },
      {
        "q": "How is the winner selected?",
        "a": "One winner is randomly selected from all eligible entries."
      },
      {
        "q": "How will I know if I won?",
        "a": "Winner notified by email within a few days after the draw."
      },
      {
        "q": "How many entries allowed?",
        "a": "One entry per person/email during the contest period."
      },
      {
        "q": "Is my data secure?",
        "a": "Your privacy is respected; data used only for this giveaway per our Privacy Policy."
      }
    ],
    "tips": [
      "Verify your email before submitting.",
      "Add our contact email to your address book.",
      "Follow The Sky Group on social media for updates."
    ]
  },
  "footerContact": {
    "organizerName": "The Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQZGEF6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T143718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHaAm5gKKnCaq7Et69SN3XJVfSW3jDdZO9a5oIu9M5QIgPTSKqvmU%2FvQzPlnWlNQlDpOYgIk21eyt%2BK11yi9YffUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJyfOjqmQfvUw9CQHCrcAxaDqlBzu8Dr5%2BR8NeYpglCuBT4POl5qLuaH3jhiVqFs9G8o8DfVUQqs6tDCf%2BpQptSWrHdLBR9TqPerk0FksNQ%2F7oQHR7cgwzWmoLouQIJWr4lxBdt4uYWUafhMUHNFwemVvxD22AqTV7rIdRpcTrAPmV071tK%2BlV%2FExk7oR3th30S4MDNRxJbsoqlKOXQOkZRvHK4QyJ0JNPhfDgjKE4gTjfDlmy26LWoxZWDRlFtDt%2Fk7xD0Y2Dl%2BrwDyoie%2FGJeNGOcSfi%2F1Y%2Bw9NqcMG9WqWJtwVIIjOdHcIHS%2BhPpMRBR%2Fv1%2FhDi%2BmK0iiRJ0el%2FEk8MnWzUeruLowYm%2F3J7DXhr1YhTiSfkgnQUCDwNmy3EhPHJ4fId3hCYlI6VNgZjV47adBI1%2F4YjIG29Yc6K56Mz251wr9%2B0QYNL6a8Tt3fpWSU7BX%2FDbWt6Y9ftiEB%2B4rmyywq4FaprJXuGMhHSIaysPrg%2Bw0GSLToITzBlJHwUl9Eox3OkIB2zBGbWPyOVTAmW1a89H%2FNfET%2FwFgyVkGirJUiE%2FTOoMGjbx%2FV7T1oBXSAgYqsGB2FhyP%2FcUTFTcltOGiU%2FXqI9xe2%2B08zKPdWRWYvvJltBlFfixycMwa0t3L2%2BePPgZAqot9MLSmxcIGOqUBzBtjHxn6IXrRLiX%2BTfsnc2B6BJKj5w54b8VcqhaZ%2BwYTQkcTRCHOamRy%2F7NdrkpbD%2F%2BJmMjRkbX3QyVJLnWEo1WeqVmy5HfEWUZBBEPykHfoLtvOegmmqB3SBNtLMHbuuTswEBuwXAICUS%2FhrlIi6r2u6W1ut%2FfmPWZIIeChlYigClh42nGti5NJ19Xgp2BwlXK%2FVUF4xDGEJb5TVDv9QjOupE9s&X-Amz-Signature=c53b6f105194b2848eecbdb347877d5074875178c7939b00dbfaca1ff434277c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Property.Ca"
  },
  "meta": {
    "pageTitle": "Win Blue Jays Tickets This Canada Day!",
    "navBrandLogoText": "The Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004c97", "#ed1c24", "#fdb913", "#000000"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-632",
    "repoUrl": "https://github.com/arslvn93/Giveaway-632",
    "tag": "Blue Jays Canada Day Giveaway",
    "netlifyUrl": "http://Giveaway-632.netlify.app",
    "netlifyId": "1003764341"
  }
};