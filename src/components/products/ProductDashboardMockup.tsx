import { cn } from "@/lib/utils";
import styles from "./ProductDashboardMockup.module.css";

interface ProductDashboardMockupProps {
  slug: string;
}

export function ProductDashboardMockup({ slug }: ProductDashboardMockupProps) {
  if (slug === "collegeos") {
    return (
      <div className={styles.window} role="region" aria-label="CollegeOS Architectural Interface Preview">
        <div className={styles.topBar}>
          <div className={styles.windowControls}>
            <span className={cn(styles.dot, styles.dotLime)} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.windowTitle} style={{ marginLeft: "8px" }}>
              COLLEGEOS // INSTITUTIONAL GOVERNANCE CONSOLE
            </span>
          </div>
          <span className={styles.previewBadge}>INTERFACE PREVIEW</span>
        </div>

        <div className={styles.workspace}>
          <aside className={styles.sidebar}>
            <span className={styles.sidebarLabel}>ACTIVE MODULES</span>
            <div className={cn(styles.navPill, styles.navPillActive)}>Academic Overview</div>
            <div className={styles.navPill}>Admissions &amp; Enrollment</div>
            <div className={styles.navPill}>Attendance &amp; Timetable</div>
            <div className={styles.navPill}>Examinations &amp; Results</div>
            <div className={styles.navPill}>Fees &amp; Hostel</div>
            <div className={styles.navPill}>IQAC &amp; NAAC Support</div>
          </aside>

          <div className={styles.mainArea}>
            <div className={styles.panelHeader}>
              <h3 className={styles.panelTitle}>Multi-Program Campus Structure</h3>
              <span className={styles.statusTag}>ROLE: PRINCIPAL / SUPER ADMIN</span>
            </div>

            <div className={styles.cardsRow}>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>SUPPORTED STREAMS</span>
                <span className={styles.miniValue}>+2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, PhD</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>INTEGRATED MODULES</span>
                <span className={styles.miniValue}>18 Configurable Core Modules</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>ACCESS GOVERNANCE</span>
                <span className={styles.miniValue}>7 Role-Based Portals</span>
              </div>
            </div>

            <div className={styles.tableBox}>
              <div className={cn(styles.tableRow, styles.tableHeader)}>
                <span>Academic Module</span>
                <span>Primary Role Workflow</span>
                <span>Governance State</span>
              </div>
              <div className={styles.tableRow}>
                <strong>Admissions &amp; Courses</strong>
                <span>Stream configuration &amp; student intake</span>
                <span className={styles.badgeGreen}>CONFIGURABLE</span>
              </div>
              <div className={styles.tableRow}>
                <strong>Attendance &amp; Exams</strong>
                <span>Faculty entry &amp; HOD verification</span>
                <span className={styles.badgeGreen}>ROLE-GATED</span>
              </div>
              <div className={styles.tableRow}>
                <strong>IQAC &amp; NAAC Support</strong>
                <span>Criterion-aligned academic records</span>
                <span className={styles.badgeSlate}>AUDIT-READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === "bizconnect") {
    return (
      <div className={styles.window} role="region" aria-label="BizConnect Architectural Interface Preview">
        <div className={styles.topBar}>
          <div className={styles.windowControls}>
            <span className={cn(styles.dot, styles.dotLime)} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.windowTitle} style={{ marginLeft: "8px" }}>
              BIZCONNECT // B2B DIRECTORY &amp; NETWORK WORKSPACE
            </span>
          </div>
          <span className={styles.previewBadge}>INTERFACE PREVIEW</span>
        </div>

        <div className={styles.workspace}>
          <aside className={styles.sidebar}>
            <span className={styles.sidebarLabel}>PLATFORM WORKSPACE</span>
            <div className={cn(styles.navPill, styles.navPillActive)}>Industry Directories</div>
            <div className={styles.navPill}>Company Pages</div>
            <div className={styles.navPill}>Business Discovery</div>
            <div className={styles.navPill}>Network Updates</div>
            <div className={styles.navPill}>Messaging (Policy-Gated)</div>
            <div className={styles.navPill}>Subscription Tiers</div>
          </aside>

          <div className={styles.mainArea}>
            <div className={styles.panelHeader}>
              <h3 className={styles.panelTitle}>Structured B2B Directory &amp; Company Discovery</h3>
              <span className={styles.statusTag}>CONFIGURABLE B2B NETWORK</span>
            </div>

            <div className={styles.cardsRow}>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>IDENTITY LAYER</span>
                <span className={styles.miniValue}>Business Profiles &amp; Company Pages</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>DISCOVERY ENGINE</span>
                <span className={styles.miniValue}>Sector &amp; Capability Directories</span>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.miniLabel}>COMMUNICATION</span>
                <span className={styles.miniValue}>Configurable Direct Messaging</span>
              </div>
            </div>

            <div className={styles.tableBox}>
              <div className={cn(styles.tableRow, styles.tableHeader)}>
                <span>Platform Capability</span>
                <span>Business Function</span>
                <span>Access Control</span>
              </div>
              <div className={styles.tableRow}>
                <strong>Company Pages</strong>
                <span>Structured offerings, sector tags &amp; posts</span>
                <span className={styles.badgeGreen}>ACTIVE MODULE</span>
              </div>
              <div className={styles.tableRow}>
                <strong>Industry Directories</strong>
                <span>Categorized B2B search &amp; discovery</span>
                <span className={styles.badgeGreen}>ACTIVE MODULE</span>
              </div>
              <div className={styles.tableRow}>
                <strong>Messaging &amp; Tiers</strong>
                <span>Permission-controlled B2B outreach</span>
                <span className={styles.badgeSlate}>CONFIGURABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: NAVCHETNAA AI Receptionist
  return (
    <div className={styles.window} role="region" aria-label="NAVCHETNAA AI Receptionist Interface Preview">
      <div className={styles.topBar}>
        <div className={styles.windowControls}>
          <span className={cn(styles.dot, styles.dotLime)} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.windowTitle} style={{ marginLeft: "8px" }}>
            NAVCHETNAA AI RECEPTIONIST // CALL INTELLIGENCE CONSOLE
          </span>
        </div>
        <span className={styles.previewBadge}>INTERFACE PREVIEW</span>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.sidebar}>
          <span className={styles.sidebarLabel}>CONSOLE MODULES</span>
          <div className={cn(styles.navPill, styles.navPillActive)}>Call History &amp; Summaries</div>
          <div className={styles.navPill}>Lead Capture Queue</div>
          <div className={styles.navPill}>Appointment Workflows</div>
          <div className={styles.navPill}>Agent Configuration</div>
          <div className={styles.navPill}>CRM Webhooks</div>
          <div className={styles.navPill}>Human Transfer Rules</div>
        </aside>

        <div className={styles.mainArea}>
          <div className={styles.panelHeader}>
            <h3 className={styles.panelTitle}>Inbound Call Intelligence &amp; Workflow Routing</h3>
            <span className={styles.statusTag}>24/7 VOICE AGENT CONFIGURED</span>
          </div>

          <div className={styles.cardsRow}>
            <div className={styles.miniCard}>
              <span className={styles.miniLabel}>CALL PROCESSING</span>
              <span className={styles.miniValue}>Transcript + AI Summary</span>
            </div>
            <div className={styles.miniCard}>
              <span className={styles.miniLabel}>WORKFLOW ACTIONS</span>
              <span className={styles.miniValue}>Booking &amp; CRM Sync</span>
            </div>
            <div className={styles.miniCard}>
              <span className={styles.miniLabel}>ESCALATION</span>
              <span className={styles.miniValue}>Warm Human Call Transfer</span>
            </div>
          </div>

          <div className={styles.tableBox}>
            <div className={cn(styles.tableRow, styles.tableHeader)}>
              <span>Inbound Workflow</span>
              <span>Automated System Action</span>
              <span>Routing Status</span>
            </div>
            <div className={styles.tableRow}>
              <strong>Service Inquiry &amp; FAQ</strong>
              <span>Answered from business knowledge base</span>
              <span className={styles.badgeGreen}>CRM LOGGED</span>
            </div>
            <div className={styles.tableRow}>
              <strong>Consultation Request</strong>
              <span>Calendar slot booked + summary created</span>
              <span className={styles.badgeGreen}>SYNCED</span>
            </div>
            <div className={styles.tableRow}>
              <strong>Priority Escalation</strong>
              <span>Transferred live with conversation context</span>
              <span className={styles.badgeSlate}>HUMAN HANDOFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}