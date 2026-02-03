"use client";

import { ExternalLink, Clock, Building, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Permit, formatCurrency } from "@/data/cities";

interface PermitCardProps {
  permit: Permit;
  index: number;
}

export function PermitCard({ permit, index }: PermitCardProps) {
  return (
    <Card className="overflow-hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value={`permit-${index}`} className="border-0">
          <AccordionTrigger className="hover:no-underline p-0">
            <CardHeader className="w-full text-left pb-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 w-full pr-4">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 group-hover:text-orange-500">
                    {permit.type}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                    <Building className="h-3 w-3" />
                    {permit.issuingAgency}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    {typeof permit.cost === 'number' ? formatCurrency(permit.cost) : permit.cost}
                    <span className="text-orange-500 ml-1">/{permit.costPeriod}</span>
                  </Badge>
                  {permit.renewalPeriod && (
                    <Badge variant="outline" className="text-slate-600">
                      <Clock className="h-3 w-3 mr-1" />
                      {permit.renewalPeriod}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
          </AccordionTrigger>
          
          <AccordionContent>
            <CardContent className="pt-4 space-y-4">
              <p className="text-slate-600">{permit.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1">
                    <FileText className="h-4 w-4 text-orange-500" />
                    Requirements
                  </h4>
                  <ul className="space-y-1">
                    {permit.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Documents */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1">
                    <FileText className="h-4 w-4 text-orange-500" />
                    Documents Needed
                  </h4>
                  <ul className="space-y-1">
                    {permit.documents.map((doc, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {permit.processingTime && (
                <div className="text-sm text-slate-500">
                  <span className="font-medium">Processing time:</span> {permit.processingTime}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {permit.applicationUrl && (
                  <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <a href={permit.applicationUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                )}
                <Button asChild size="sm" variant="outline">
                  <a href={permit.infoUrl} target="_blank" rel="noopener noreferrer">
                    More Info
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
