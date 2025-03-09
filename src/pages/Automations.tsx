
import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Plus, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Automation {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive" | "draft";
  createdAt: string;
  lastRun?: string;
}

const Automations = () => {
  // This would normally be fetched from an API or state management
  const [automations, setAutomations] = useState<Automation[]>([]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8f8f8]">
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <h1 className="text-2xl font-medium">Automations</h1>
        <div className="flex gap-3">
          <Link to="/">
            <Button variant="outline" className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200">
              Back to Workflow
            </Button>
          </Link>
          <Link to="/">
            <Button className="px-4 py-2 text-sm bg-black text-white hover:bg-opacity-90">
              <Plus className="h-4 w-4 mr-1" />
              Create Automation
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex-1 p-8">
        <div className="mb-8 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#F4EBFF] p-3 rounded-full">
              <Zap className="h-6 w-6 text-[#9E77ED]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Workflow Automations</h2>
              <p className="text-gray-600">
                Automations help you streamline your workflow by automatically performing actions based on triggers and conditions.
                Create custom workflows that suit your specific needs and save time on repetitive tasks.
              </p>
            </div>
          </div>
        </div>

        {automations.length > 0 ? (
          <div className="grid gap-4">
            {automations.map((automation) => (
              <div 
                key={automation.id} 
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium mb-1">{automation.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{automation.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Created:</span> {new Date(automation.createdAt).toLocaleDateString()}
                      </div>
                      {automation.lastRun && (
                        <div>
                          <span className="font-medium">Last run:</span> {new Date(automation.lastRun).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      automation.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : automation.status === 'inactive' 
                          ? 'bg-gray-100 text-gray-700' 
                          : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
                    </div>
                    <Link to="/">
                      <Button variant="ghost" size="sm" className="text-gray-500">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-[#F4EBFF] p-4 rounded-full inline-flex mb-4">
                <Zap className="h-8 w-8 text-[#9E77ED]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No automations yet</h3>
              <p className="text-gray-600 mb-6">
                Create your first automation to streamline your workflow and save time on repetitive tasks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#f8f8f8] p-4 rounded-lg border border-gray-100">
                  <Info className="h-5 w-5 text-[#9E77ED] mb-2" />
                  <h4 className="font-medium mb-1">Save Time</h4>
                  <p className="text-sm text-gray-600">Eliminate manual work by automating routine operations</p>
                </div>
                <div className="bg-[#f8f8f8] p-4 rounded-lg border border-gray-100">
                  <Info className="h-5 w-5 text-[#9E77ED] mb-2" />
                  <h4 className="font-medium mb-1">Reduce Errors</h4>
                  <p className="text-sm text-gray-600">Minimize human error by standardizing processes</p>
                </div>
                <div className="bg-[#f8f8f8] p-4 rounded-lg border border-gray-100">
                  <Info className="h-5 w-5 text-[#9E77ED] mb-2" />
                  <h4 className="font-medium mb-1">Track Results</h4>
                  <p className="text-sm text-gray-600">Monitor automation performance and optimize workflows</p>
                </div>
                <div className="bg-[#f8f8f8] p-4 rounded-lg border border-gray-100">
                  <Info className="h-5 w-5 text-[#9E77ED] mb-2" />
                  <h4 className="font-medium mb-1">Stay Consistent</h4>
                  <p className="text-sm text-gray-600">Ensure processes are followed the same way every time</p>
                </div>
              </div>
              
              <Link to="/">
                <Button className="px-5 py-2 bg-[#9E77ED] hover:bg-[#8B5CF6] text-white border-none">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Automation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automations;
