---
description: Verified Local-First Deployment
---

# Verified Local-First Deployment (S.O.P.)

To avoid broken production states and minimize deployment anxiety, follow these steps strictly:

### 1. Local Development
Always perform code changes in the local directory first. Do NOT assume a change will work until it is tested.

### 2. Local Verification
Run the following locally and confirm everything is functioning as intended:
- `npm run dev`: Check the UI and interactions.
- `npm run build`: Confirm the build succeeds (catches many routing/typing issues).

### 3. Verification Checklist
- Count images in known projects (e.g., LeahA Bradford should have 5).
- Verify navigation elements (e.g., arrows) are visible and functional.
- Check the URL for loops or unexpected character sequences.

### 4. Git Commit and Push
Only after successful local verification, commit the changes with a descriptive message and push to the remote repository.
