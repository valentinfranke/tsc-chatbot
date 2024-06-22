/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Markdown formated context to be injected at the beginning of each chat session.
 *
 * For sections, use h2-h6.
 * For data tables, use `csv` code sections, `json` code sections, or |Markdown tables|.
 */
export const context = `
## IT Solution Market Size (USD Millions) in Germany.

| IT Solution | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 |
|---|---|---|---|---|---|---|---|---|---|
| **Internet of Things** | | | | | | | | | |
| IoT Software | 5,727.00 | 7,136.40 | 8,678.70 | 9,856.50 | 10,823.20 | 12,866.70 | 15,369.80 | 18,401.20 | 22,067.40 |
| IoT Hardware | 4,714.70 | 5,708.30 | 6,825.50 | 7,644.60 | 8,924.90 | 10,405.80 | 12,189.20 | 14,309.00 | 16,824.50 |
| IoT Services | 4,381.90 | 4,764.70 | 5,089.40 | 5,582.40 | 6,338.20 | 7,474.00 | 8,855.30 | 10,515.00 | 12,506.20 |
| **Security** | | | | | | | | | |
| Managed Security Services | 1,826.80 | 1,900.70 | 2,028.60 | 2,262.50 | 2,492.70 | 2,877.60 | 3,337.60 | 3,879.40 | 4,516.40 |
| Identity & Access Management | 351.90 | 387.30 | 446.30 | 498.00 | 542.50 | 627.90 | 730.20 | 850.90 | 993.30 |
| Security Intelligence and Management | 225.40 | 250.60 | 308.30 | 344.70 | 375.70 | 428.50 | 491.20 | 564.20 | 649.20 |
| Endpoint Security Platforms | 231.80 | 271.80 | 337.90 | 369.90 | 412.70 | 454.30 | 502.60 | 557.20 | 618.80 |
| Data Protection | 183.60 | 194.40 | 210.50 | 231.70 | 255.50 | 293.20 | 338.10 | 390.70 | 452.20 |
| Unified Threat Management (UTM) Appliances | 161.00 | 169.80 | 200.10 | 221.00 | 255.10 | 289.30 | 329.60 | 376.30 | 430.40 |
| Application Security | 120.00 | 118.90 | 144.90 | 174.00 | 204.70 | 239.40 | 281.50 | 331.60 | 391.30 |
| Fraud Prevention and Transactional Security | 108.60 | 118.50 | 146.70 | 178.30 | 207.40 | 241.80 | 282.70 | 331.40 | 389.50 |
| Network Security | 145.60 | 156.00 | 181.50 | 194.00 | 229.30 | 256.20 | 287.70 | 323.70 | 364.90 |
| Multi-Factor Authentication (MFA) | 162.00 | 170.20 | 181.50 | 195.30 | 211.80 | 236.90 | 266.20 | 299.80 | 338.10 |
| Messaging Security | 123.00 | 128.90 | 139.20 | 153.30 | 169.90 | 196.00 | 227.10 | 263.80 | 306.90 |
| Application Delivery Controllers (ADCs) | 165.10 | 172.80 | 185.60 | 195.70 | 212.40 | 229.20 | 248.50 | 270.00 | 293.90 |
| Web Security | 85.70 | 89.50 | 100.40 | 106.40 | 118.30 | 136.00 | 160.90 | 195.00 | 242.00 |
| Intrusion Prevention Systems | 95.70 | 103.50 | 114.30 | 122.70 | 133.00 | 150.10 | 170.30 | 193.50 | 220.20 |
| Server Security | 65.60 | 70.10 | 76.20 | 83.60 | 94.30 | 106.90 | 121.80 | 139.00 | 159.00 |
| **Networking** | | | | | | | | | |
| Managed Network Services | 2,115.60 | 2,280.20 | 2,512.00 | 2,699.70 | 2,919.20 | 3,224.90 | 3,579.80 | 3,982.80 | 4,438.50 |
| Ethernet MAN/WAN Services | 1,447.00 | 1,512.90 | 1,630.60 | 1,727.90 | 1,830.70 | 2,029.80 | 2,261.10 | 2,524.10 | 2,822.20 |
| Ethernet Switches | 1,357.00 | 1,412.60 | 1,506.70 | 1,558.90 | 1,692.80 | 1,830.70 | 1,989.30 | 2,166.40 | 2,363.30 |
| IP/MPLS VPN | 1,292.10 | 1,359.10 | 1,447.10 | 1,476.00 | 1,516.80 | 1,563.10 | 1,616.70 | 1,678.80 | 1,744.50 |
| xDSL (Digital Subscriber Line) | 2,398.30 | 2,510.90 | 2,607.10 | 2,270.70 | 2,093.70 | 1,955.20 | 1,784.60 | 1,578.60 | 1,348.00 |
| Fiber Optic (FTTH/B) | 7.80 | 12.50 | 19.40 | 33.00 | 104.00 | 254.40 | 460.50 | 726.30 | 1,055.40 |
| Content Delivery Network (CDN) Services | 257.30 | 297.10 | 342.50 | 400.90 | 466.60 | 542.30 | 629.70 | 729.80 | 843.50 |
| SDN Controller platform | 222.40 | 246.70 | 289.80 | 328.90 | 369.70 | 435.50 | 515.50 | 611.50 | 726.60 |
| Routers | 400.40 | 379.80 | 417.20 | 457.50 | 477.30 | 511.20 | 550.10 | 593.40 | 641.10 |
| SD-WAN | 143.70 | 141.20 | 181.90 | 220.40 | 251.50 | 314.50 | 395.10 | 497.40 | 627.30 |
| Ethernet Private Line Services | 443.80 | 461.60 | 477.60 | 478.70 | 483.30 | 489.40 | 497.40 | 507.60 | 518.30 |
| Network Monitoring and Access Control | 158.00 | 194.00 | 222.90 | 254.00 | 286.00 | 322.90 | 366.00 | 416.60 | 474.30 |
| Firewalls and VPN Appliances | 188.30 | 196.50 | 229.30 | 242.70 | 267.30 | 300.80 | 344.50 | 400.60 | 471.50 |
| WLAN Devices | 267.90 | 281.10 | 303.40 | 318.00 | 342.00 | 368.60 | 398.70 | 433.00 | 470.70 |
| Ethernet LAN Services | 236.80 | 240.50 | 250.00 | 255.30 | 262.50 | 272.50 | 284.30 | 297.30 | 311.40 |
| Site-to-Site VPN | 191.70 | 202.80 | 209.70 | 209.00 | 208.60 | 208.60 | 209.50 | 211.10 | 213.00 |
| Content-Filtering and Anti-Spam Appliances | 82.90 | 84.40 | 89.20 | 97.00 | 106.60 | 124.90 | 147.00 | 173.30 | 204.70 |
| WAN Optimization Appliance | 77.20 | 77.90 | 81.30 | 83.00 | 87.10 | 91.90 | 97.40 | 103.50 | 110.20 |
| **Other** | | | | | | | | | |
| Cable internet | 20.90 | 22.60 | 24.20 | 21.80 | 20.90 | 21.00 | 21.10 | 21.20 | 21.30 |
| Other Communication Services | 13.90 | 13.90 | 13.90 | 12.00 | 12.00 | 12.30 | 12.70 | 13.20 | 13.60 |

***

**Notes:**

* This table represents estimates of the market size for various IT solutions, including IoT, security, and networking.
* Values are in USD millions.
* The data is sourced from reputable market research firms and industry reports.

**Disclaimer:**

* This information is provided for general knowledge purposes only and should not be considered as investment advice.
* Market size estimates can vary depending on the source and methodology used.
*




`;
