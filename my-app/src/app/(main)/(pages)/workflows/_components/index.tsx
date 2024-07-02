import React from 'react'
import Workflow from './workflow'
import { onGetWorkflows } from '../_actions/workflow-connections'
import MoreCredits from './more-creadits'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows()
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((flow) => (
            <Workflow
              key={flow.id}
              {...flow}
            />
          ))
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )}
      </section>
    </div>
  )
}

export default Workflows














/* Alternative -->index.tsx */

// import React, { useEffect, useState } from 'react'
// import Workflow from './workflow'
// import { onGetWorkflows } from '../_actions/workflow-connections'
// import MoreCredits from './more-credits'

// const Workflows: React.FC = () => {
//   const [workflows, setWorkflows] = useState<any[]>([]); // Adjust the type as per your actual workflow type

//   useEffect(() => {
//     const fetchWorkflows = async () => {
//       try {
//         const fetchedWorkflows = await onGetWorkflows();
//         setWorkflows(fetchedWorkflows);
//       } catch (error) {
//         console.error('Error fetching workflows:', error);
//       }
//     };

//     fetchWorkflows();
//   }, []); // Run once on component mount

//   return (
//     <div className="relative flex flex-col gap-4">
//       <section className="flex flex-col m-2">
//         <MoreCredits />
//         {workflows.length ? (
//           workflows.map((flow) => (
//             <Workflow key={flow.id} {...flow} />
//           ))
//         ) : (
//           <div className="mt-28 flex text-muted-foreground items-center justify-center">
//             No Workflows
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Workflows;
